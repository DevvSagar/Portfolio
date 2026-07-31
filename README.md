# 🚀 Sagar Singh — Personal Portfolio

[![Live Website](https://img.shields.io/badge/Live_Site-devvx.in-64ffda?style=for-the-badge&logo=google-chrome&logoColor=0a192f)](https://devvx.in)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

Personal developer portfolio for **Sagar Singh** (DevvSagar), Backend Software Engineer. Built with **React 19**, **Vite**, **Material-UI**, and a custom zero-dependency **ASCII Particle Simulation Engine**.

---

## ✨ Key Features

- 🎨 **Interactive ASCII Particle Engine**: Real-time canvas particle simulation rendering dynamic ASCII art from pre-computed coordinate matrices for mobile, tablet, and desktop breakpoints.
- 🎮 **Gamified Mode**: Integrated mini arcade mode featuring custom physics, obstacle platforms, and interactive canvas controls.
- ⚡ **High-Performance Architecture**: Built with Vite 8 for instant HMR, ultra-fast sub-second production builds (<500ms), and 60 FPS UI animations.
- 📱 **Fully Responsive Design**: Adaptive layout tuned for mobile, tablet, and ultra-wide displays with custom drawer navigation.
- 🔍 **SEO & Knowledge Graph Optimization**: Includes Open Graph tags, Twitter Cards, Schema.org `Person` JSON-LD structured data, XML Sitemaps, and robots.txt rules.
- 🚀 **Automated CI/CD**: Seamless GitHub Actions deployment pipeline to custom domain (`devvx.in`).

---

## 🛠 Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, JavaScript (ES6+), Vite 8 |
| **Styling & UI** | Vanilla CSS3, React Bootstrap, Material-UI v6 |
| **Graphics & Math** | HTML5 Canvas 2D, Node.js Zlib PNG Decoder (`extract_ascii.cjs`) |
| **Routing** | React Router v7 (`HashRouter` for subpath safety) |
| **Deployment & CI/CD** | GitHub Actions, GitHub Pages, GoDaddy DNS (`devvx.in`) |

---

## 📂 Project Structure

```text
Portfolio/
├── .github/workflows/       # GitHub Actions deployment pipeline (deploy.yml)
├── public/                  # Static public assets (profile image, sitemap.xml, robots.txt, CNAME)
├── src/
│   ├── assets/              # ASCII coordinate data matrices (asciiData.js)
│   ├── components/          # Reusable React components
│   │   ├── About.jsx        # Bio, skills grid, and profile image
│   │   ├── AsciiPortrait.jsx# Interactive HTML5 Canvas ASCII particle engine
│   │   ├── Experience.jsx   # Career overview section container
│   │   ├── JobList.jsx      # Interactive Material-UI tabbed career experience
│   │   ├── Projects.jsx    # Spotlight project carousel & grid
│   │   ├── RobotGame.jsx   # Interactive canvas mini-game mode
│   │   ├── NavBar.jsx       # Fixed header navigation with social links
│   │   └── SidebarNav.jsx   # Vertical desktop navigation sidebar
│   ├── styles/              # Component-specific CSS modules
│   ├── App.jsx              # Main application root & layout composition
│   └── main.jsx             # React DOM entry point
├── extract_ascii.cjs        # Standalone Node.js script for generating ASCII matrices from PNG
└── vite.config.js           # Vite build configuration
```

---

## 💻 Local Setup & Development

### Prerequisites
- Node.js **>= 20.0.0**
- npm **>= 10.0.0**

### 1. Clone the repository
```bash
git clone https://github.com/DevvSagar/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Generate Production Build
```bash
npm run build
```
The compiled, minified bundle will be output to the `dist/` folder.

### 5. Regenerate ASCII Art Matrix (Optional)
If you update `public/profile.png`, regenerate the particle dataset by running:
```bash
node extract_ascii.cjs
```

---

## 🌐 Deployment

The project deploys automatically to **[devvx.in](https://devvx.in)** via GitHub Actions whenever changes are pushed to the `main` branch.

### Manual Workflow
To trigger a deployment, push to `main`:
```bash
git add .
git commit -m "feat: your update message"
git push origin main
```

---

## 📬 Contact & Links

- **Website**: [devvx.in](https://devvx.in)
- **GitHub**: [@DevvSagar](https://github.com/DevvSagar)
- **LinkedIn**: [linkedin.com/in/devvsag](https://www.linkedin.com/in/devvsag/)
- **Email**: [devvsag@gmail.com](mailto:devvsag@gmail.com)

---

<p center>Designed & Developed by <b>Sagar Singh</b> © 2026</p>
