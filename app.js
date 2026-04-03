const express = require("express");
const app = express();

const projects = [
  {
    name: "🚀 DevOps CI/CD Pipeline",
    desc: "Automated CI/CD using GitHub Actions, Docker & AWS",
  },
  {
    name: "☸️ Kubernetes on EKS",
    desc: "Deployed scalable application using AWS EKS",
  },
  {
    name: "🏗 Terraform Infrastructure",
    desc: "Provisioned AWS infra using Infrastructure as Code",
  },
];

function generateProjects() {
  return projects.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    </div>
  `).join("");
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
        background: linear-gradient(-45deg, #020617, #0f172a, #1e293b, #020617);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        color: white;
        text-align: center;
      }

      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .container {
        padding: 50px 20px;
      }

      h1 {
        font-size: 3.5rem;
        color: #38bdf8;
        animation: fadeDown 1s ease;
      }

      h2 {
        color: #94a3b8;
        margin-bottom: 30px;
      }

      .tagline {
        font-size: 1.2rem;
        margin-bottom: 40px;
        color: #cbd5f5;
      }

      .section {
        margin: 40px auto;
        max-width: 900px;
      }

      .card {
        background: rgba(30, 41, 59, 0.8);
        padding: 25px;
        border-radius: 15px;
        margin: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        backdrop-filter: blur(10px);
        transition: 0.3s;
      }

      .card:hover {
        transform: translateY(-10px) scale(1.02);
      }

      .skills span {
        display: inline-block;
        margin: 8px;
        padding: 8px 15px;
        background: #38bdf8;
        color: black;
        border-radius: 20px;
        font-weight: bold;
      }

      .project-card {
        background: #1e293b;
        margin: 15px;
        padding: 20px;
        border-radius: 12px;
        transition: 0.3s;
      }

      .project-card:hover {
        background: #334155;
        transform: scale(1.05);
      }

      .btn {
        margin-top: 20px;
        padding: 12px 25px;
        border-radius: 8px;
        border: none;
        background: #22c55e;
        color: black;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }

      .btn:hover {
        background: #16a34a;
        transform: scale(1.1);
      }

      .links a {
        margin: 10px;
        color: #38bdf8;
        text-decoration: none;
        font-weight: bold;
      }

      .footer {
        margin-top: 50px;
        color: #64748b;
      }

      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-40px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  </head>

  <body>

    <div class="container">

      <h1>🚀 Prajwal S P</h1>
      <h2>DevOps Engineer</h2>

      <p class="tagline">
        Building scalable systems • Automating deployments • Cloud-first mindset
      </p>

      <div class="section card">
        <h3>💡 About Me</h3>
        <p>
          Passionate DevOps Engineer focused on CI/CD, Kubernetes, and cloud infrastructure.
          I build real-world production pipelines and scalable systems.
        </p>
      </div>

      <div class="section card skills">
        <h3>🛠 Skills</h3>
        <span>AWS</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Terraform</span>
        <span>CI/CD</span>
        <span>GitHub Actions</span>
      </div>

      <div class="section">
        <h3>📂 Projects</h3>
        ${generateProjects()}
      </div>

      <button class="btn" onclick="alert('🚀 Deployed using full DevOps pipeline!')">
        View Deployment Info
      </button>

      <div class="links">
        <p>
          🔗 <a href="#">GitHub</a> | 
          <a href="#">LinkedIn</a>
        </p>
      </div>

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
