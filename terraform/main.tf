provider "aws" {
  region = "ap-south-1"
}

# 🔥 Security Group
resource "aws_security_group" "app_sg" {
  name        = "devops-app-sg"
  description = "Allow SSH and App access"

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "App Port"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 🔥 EC2 Instance
resource "aws_instance" "app" {
  ami           = "ami-0f58b397bc5c1f2e8"
  instance_type = "t3.small"
  key_name      = "psp"

  vpc_security_group_ids = [aws_security_group.app_sg.id]

  tags = {
    Name = "devops-app"
  }
}

# 🔥 Output
output "public_ip" {
  value = aws_instance.app.public_ip
}
