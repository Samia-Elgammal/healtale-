# 📸 HealTale Image & Asset Guide

## 🎨 Image Naming Conventions

### Comic Stories Images
Place these in `public/images/comics/`:

**Banner Images (1920x1080 recommended):**
- `comic-1-confidence-banner.jpg` - "She Looks Like Confidence" banner
- `comic-2-voice-banner.jpg` - "The Voice Inside Me" banner  
- `comic-3-science-banner.jpg` - "Mirror, Mirror, Science" banner

**Panel Images (800x600 recommended):**
- `comic-1-panel-1.jpg` - Girl wiping tears
- `comic-1-panel-2.jpg` - Friend giving lipstick
- `comic-1-panel-3.jpg` - Applying lipstick
- `comic-1-panel-4.jpg` - Walking confidently
- `comic-1-panel-5.jpg` - Smiling in mirror

- `comic-2-panel-1.jpg` - Girl looking in mirror
- `comic-2-panel-2.jpg` - Afraid at school
- `comic-2-panel-3.jpg` - Night skincare routine
- `comic-2-panel-4.jpg` - Learning about skin
- `comic-2-panel-5.jpg` - Confident smile

- `comic-3-panel-1.jpg` - Girl in lab coat
- `comic-3-panel-2.jpg` - Molecules to creams
- `comic-3-panel-3.jpg` - Clear-skinned reflection
- `comic-3-panel-4.jpg` - Science fair presentation

### Ingredient Images
Place these in `public/images/ingredients/`:

**Molecule Graphics (400x400 recommended):**
- `niacinamide-molecule.png`
- `salicylic-acid-molecule.png`
- `hyaluronic-acid-molecule.png`
- `retinol-molecule.png`
- `centella-molecule.png`
- `vitamin-c-molecule.png`
- `ceramides-molecule.png`
- `glycerin-molecule.png`

### General Assets
Place these in `public/images/`:
- `healtale-logo.png` - Main logo
- `hero-background.jpg` - Optional hero background
- `journal-cover.jpg` - Journal cover image

## 📄 PDF Creation Guide

### Confidence Journal PDF
Create a PDF with these specifications:
- **File name:** `HealTale-Confidence-Journal.pdf`
- **Size:** A4 (210x297mm)
- **Pages:** 6 pages
- **Colors:** White background with blush green headers
- **Fonts:** Inter for body text, Playfair Display for headers

### PDF Content Structure:
1. **Cover Page:** "Start Your Confidence Journey"
2. **Daily Mood Tracker** (2 pages)
3. **Self-Talk Reframing Prompts** (1 page)
4. **Mirror Moments Reflection** (1 page)
5. **Skin + Mood Log** (1 page)
6. **Monthly Goal Setting & Affirmations** (1 page)

## 🚀 GitHub Publishing Guide

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial HealTale website commit"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `healtale-website`
3. Make it public
4. Don't initialize with README (we have one)

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/healtale-website.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### 5. Alternative: GitHub Pages
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)

## 📁 File Structure for Images
```
public/
├── images/
│   ├── comics/
│   │   ├── comic-1-confidence-banner.jpg
│   │   ├── comic-2-voice-banner.jpg
│   │   ├── comic-3-science-banner.jpg
│   │   └── panels/
│   │       ├── comic-1-panel-1.jpg
│   │       └── ... (all panels)
│   ├── ingredients/
│   │   ├── niacinamide-molecule.png
│   │   ├── salicylic-acid-molecule.png
│   │   └── ... (all ingredients)
│   └── journal/
│       └── healtale-journal-cover.jpg
├── journal/
│   └── HealTale-Confidence-Journal.pdf
```

## 🎯 Quick Setup Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 📧 Contact Integration
The email `taleheal@gmail.com` is already integrated and ready to receive messages through the contact form.
