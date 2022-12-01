terraform {
  backend "s3" {
    encrypt = true
    bucket  = "masjid-bilal-terraform-remote-state-storage-s3"
    region  = "eu-west-2"
    profile = "MasjidBilal"
    key     = "masjid-bilal/terraform.tfstate"
  }
}

resource "aws_s3_bucket_website_configuration" "masjib-bilal-bucket" {
  bucket = "masjidebilal.co.uk"

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }

}