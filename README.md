# Prajwal N R — Portfolio

> "I build before I overthink. Ideas stay ideas until there's code behind them."

Personal portfolio site built with **React + Vite + TypeScript**. Editorial dark-themed design showcasing projects, experience, and contact.

🌐 **Live:** [prajwalnr.vercel.app](https://prajwalnr.vercel.app)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero section with portrait, quote, and intro |
| `/projects` | CraveBite, Veer Rakshak, ElderlyMinds, PolyX |
| `/about` | Bio, tech stack, and skills |
| `/experience` | Hackathons, certifications, leadership |
| `/contact` | Social links, email, and live message form |

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Animations:** Framer Motion
- **Fonts:** Barlow Condensed, Inter, JetBrains Mono
- **Contact Form:** FormSubmit.co (no backend needed)
- **Deployment:** Vercel

---

## Run Locally

```bash
# Clone the repo
git clone https://github.com/praju455/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview it with:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Fixed top nav with active link state
│   └── Footer.tsx       # Minimal footer
├── pages/
│   ├── Home.tsx         # Hero section
│   ├── About.tsx        # Bio + skills
│   ├── Projects.tsx     # Project cards
│   ├── Experience.tsx   # Hackathons + certifications
│   └── Contact.tsx      # Contact form + socials
public/
├── profile/             # Portrait photos
├── projects/            # Project screenshots
└── Prajwal_NR_Resume.pdf  # Resume (linked from navbar)
```

---

## Contact

- **Email:** 5434223prajwaln@gmail.com
- **LinkedIn:** [linkedin.com/in/prajwalnr](https://www.linkedin.com/in/prajwalnr/)
- **GitHub:** [github.com/praju455](https://github.com/praju455)
- **Instagram:** [@praj264ironcap](https://instagram.com/praj264ironcap)
