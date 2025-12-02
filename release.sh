#!/bin/bash

# Exit on errors
set -e  

if [ -f .env ]; then
    source ./.env
else
    echo "Error: .env file not found. Aborting deployment."
    exit 1
fi

# --- 2. Check that critical variables are set ---
if [ -z "$DISTRIBUTION_ID" ] || [ -z "$BUCKET_NAME" ]; then
    echo "Error: One or more required environment variables (DISTRIBUTION_ID, BUCKET_NAME) are not set in .env"
    exit 1
fi
echo "Using DISTRIBUTION_ID: $DISTRIBUTION_ID"
echo "Using BUCKET_NAME: $BUCKET_NAME"

export DISTRIBUTION_ID
# Ensure we are in the script's directory
cd "$(dirname "$0")"

# 1️⃣ Run Next.js static build
# echo "Building Next.js static site..."
# npm run build

# 2️⃣ Sync files to S3 (deletes old files not in new build)
echo "Syncing files to S3..."
aws s3 sync "out/" "s3://$BUCKET_NAME" --delete --cache-control "no-cache"
echo "S3 sync complete. ✅"

# 3️⃣ Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
echo "CloudFront invalidation requested."

echo "✅ Deployment complete!"
