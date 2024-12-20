npm run build

aws s3 sync out/ s3://masjidebilal.co.uk/ --acl public-read

aws cloudfront create-invalidation --distribution-id E2U5WNLM4FL66L --paths /\*