# Alisha John K — Portfolio

A bold, modern developer portfolio built with **Vite + React**.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or GitHub Pages.

## 📁 Project Structure

```
src/
├── components/
│   ├── GlowCursor.jsx          # Mouse-following glow effect
│   ├── Typewriter.jsx          # Animated typewriter text
│   ├── span.jsx       # Click-to-edit inline fields
│   ├── FloatingPhoto.jsx       # Animated profile photo with upload
│   ├── FloatingPhoto.module.css
│   ├── SkillsEditor.jsx        # Add/remove skill chips
│   ├── SkillsEditor.module.css
│   ├── ProjectCard.jsx         # Editable project cards
│   ├── ProjectCard.module.css
│   ├── ContactSection.jsx      # Email draft form
│   ├── ContactSection.module.css
│   ├── ResumeModal.jsx         # Download confirmation modal
│   ├── ResumeModal.module.css
│   ├── SectionHeader.jsx       # Reusable section headings
│   └── SectionHeader.module.css
├── data/
│   └── portfolioData.js        # ⭐ Edit your info here
├── App.jsx                     # Main layout & sections
├── main.jsx                    # React entry point
└── index.css                   # Global styles & CSS variables
```

## ✏️ Personalising Your Portfolio

### Quick edits (in the browser)

Every text field is **click-to-edit** — just click your name, bio, job title, project descriptions etc. directly on the page.

### Permanent edits

Open `src/data/portfolioData.js` and update:

- `name`, `title`, `status`, `bio`
- `email`, `linkedin`
- `resumeUrl` — put your PDF in `public/` and set `"/resume.pdf"`
- `skills` — add/remove skill objects `{ name, icon, color }`
- `projects` — add/remove project objects

### Adding your photo

- Hover the photo area on the About section and click **📷 Change photo**
- Or set a hosted image URL in `portfolioData.js` under `photo`

## 🌐 Deploying

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://<username>.github.io/<repo>"
npm run build && npx gh-pages -d dist
```
