provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "app" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.small"
  key_name      = "psp.pem"

  security_groups = ["default"]

  tags = {
    Name = "devops-app"
  }
}

output "public_ip" {
  value = aws_instance.app.public_ip
}
