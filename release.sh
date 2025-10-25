#!/bin/bash

# Exit on errors
set -e  

# Enable debug logging (optional)
set -x  

# Define variables (update these)
DISTRIBUTION_ID="E2U5WNLM4FL66L"
BUCKET_NAME="masjidebilal.co.uk"
BUILD_DIR="out/"  # Ensure Next.js is exporting static files here

# Ensure we are in the script's directory
cd "$(dirname "$0")"

# 1️⃣ Run Next.js static build
# echo "Building Next.js static site..."
# npm run build

# 2️⃣ Sync files to S3 (deletes old files not in new build)
echo "Syncing files to S3..."
aws s3 sync "$BUILD_DIR" "s3://$BUCKET_NAME" --delete --cache-control "no-cache"

# 3️⃣ Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*"

echo "✅ Deployment complete!"
