const express = require("express");
const app = express();

const projects = [
  {
    name: "🚀 CI/CD Pipeline",
    desc: "GitHub Actions + Docker + AWS automation",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
  },
  {
    name: "☸️ Kubernetes Deployment",
    desc: "Deployed scalable app on AWS EKS",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97"
  },
  {
    name: "🏗 Terraform Infra",
    desc: "Provisioned infrastructure using Terraform",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  }
];

function generateProjects() {
  return projects.map(p => `
    <div class="project-card">
      <img src="${p.img}" />
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
        color: white;
        overflow-x: hidden;
        background: linear-gradient(270deg, #0ea5e9, #9333ea, #22c55e, #f59e0b);
        background-size: 800% 800%;
        animation: gradientMove 12s ease infinite;
      }

      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .container {
        text-align: center;
        padding: 40px 20px;
      }

      h1 {
        font-size: 3.5rem;
        margin-bottom: 10px;
      }

      h2 {
        color: #e2e8f0;
      }

      .profile-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px;
        border: 4px solid white;
      }

      .card {
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(10px);
        margin: 20px auto;
        padding: 20px;
        border-radius: 15px;
        width: 85%;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }

      .skills span {
        display: inline-block;
        margin: 8px;
        padding: 8px 15px;
        background: white;
        color: black;
        border-radius: 20px;
        font-weight: bold;
      }

      .project-card {
        background: rgba(0,0,0,0.5);
        margin: 20px;
        padding: 15px;
        border-radius: 12px;
        transition: 0.3s;
      }

      .project-card img {
        width: 100%;
        border-radius: 10px;
      }

      .project-card:hover {
        transform: scale(1.05);
      }

      iframe {
        width: 90%;
        height: 400px;
        border-radius: 12px;
        margin-top: 20px;
      }

      .btn {
        margin-top: 20px;
        padding: 12px 25px;
        border-radius: 8px;
        border: none;
        background: black;
        color: white;
        font-weight: bold;
        cursor: pointer;
      }

      .btn:hover {
        background: white;
        color: black;
      }

      .footer {
        margin-top: 40px;
        color: #e2e8f0;
      }
    </style>
  </head>

  <body>

    <div class="container">

      <img class="profile-img" src="https://i.pravatar.cc/300" />

      <h1>🚀 Prajwal S P</h1>
      <h2>DevOps Engineer | Cloud | Kubernetes</h2>

      <div class="card">
        <h3>💡 About Me</h3>
        <p>
          I design scalable cloud systems, automate deployments,
          and build real-world DevOps pipelines.
        </p>
      </div>

      <div class="card skills">
        <h3>🛠 Skills</h3>
        <span>AWS</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Terraform</span>
        <span>CI/CD</span>
      </div>

      <div class="card">
        <h3>📂 Projects</h3>
        ${generateProjects()}
      </div>

      <div class="card">
        <h3>🎥 DevOps Demo</h3>
        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
      </div>

      <button class="btn" onclick="alert('🚀 Fully automated CI/CD to Kubernetes!')">
        View Deployment Info
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
