const express = require("express");
const app = express();

// 🔥 Dynamic projects data
const projects = [
  {
    name: "DevOps CI/CD Pipeline",
    desc: "Automated pipeline using GitHub Actions, Docker, and AWS",
  },
  {
    name: "EKS Kubernetes Deployment",
    desc: "Deployed scalable app using Kubernetes on AWS EKS",
  },
  {
    name: "Terraform Infra Setup",
    desc: "Provisioned AWS infrastructure using Terraform",
  },
];

// Generate project cards dynamically
function generateProjects() {
  return projects
    .map(
      (p) => `
      <div class="card fade-in">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      </div>
    `
    )
    .join("");
}

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
    <title>Prajwal S P | DevOps Engineer</title>

    <style>
      body {
        margin: 0;
        font-family: 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #020617, #0f172a);
        color: white;
        overflow-x: hidden;
      }

      .container {
        padding: 40px;
        text-align: center;
      }

      h1 {
        font-size: 3rem;
        color: #38bdf8;
        animation: slideDown 1s ease;
      }

      h2 {
        color: #94a3b8;
        animation: fadeIn 2s ease;
      }

      .card {
        background: #1e293b;
        margin: 20px auto;
        padding: 20px;
        border-radius: 15px;
        width: 80%;
        box-shadow: 0px 10px 30px rgba(0,0,0,0.6);
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: scale(1.05);
      }

      .highlight {
        color: #22c55e;
        font-weight: bold;
      }

      .btn {
        margin-top: 20px;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        background: #38bdf8;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }

      .btn:hover {
        background: #0ea5e9;
        transform: scale(1.1);
      }

      .footer {
        margin-top: 40px;
        color: #64748b;
      }

      /* Animations */
      @keyframes slideDown {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .fade-in {
        animation: fadeIn 1.5s ease;
      }

    </style>
  </head>

  <body>

    <div class="container">

      <h1>🚀 Prajwal S P</h1>
      <h2>DevOps Engineer | AWS | Kubernetes | CI/CD</h2>

      <div class="card fade-in">
        <h3>💡 About Me</h3>
        <p>
          I build scalable, automated, and production-ready systems using modern DevOps tools.
        </p>
      </div>

      <div class="card fade-in">
        <h3>🛠 Skills</h3>
        <p>AWS | Docker | Kubernetes | Terraform | GitHub Actions | Linux</p>
      </div>

      <div class="card fade-in">
        <h3>🔥 Live DevOps Project</h3>
        <p>
          This app is deployed using 
          <span class="highlight">Docker + Kubernetes (EKS) + CI/CD Pipeline</span>
        </p>
      </div>

      <h2>📂 Projects</h2>

      ${generateProjects()}

      <button class="btn" onclick="alert('🚀 Deployed using full DevOps pipeline!')">
        See Deployment Info
      </button>

      <div class="footer">
        <p>⚡ Built & Deployed by Prajwal S P</p>
      </div>

    </div>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
