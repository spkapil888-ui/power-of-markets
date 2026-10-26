# 📈 Power of Markets (POM) – FinTech Market Education Platform

> **Official Institutional Web Platform for Stock Market, Derivatives, and Quantitative Trading Pedagogy by Abhishek Upadhyay.**

[![React 19](https://img.shields.io/badge/React-19.0.1-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)]()

---

## 📌 Table of Contents / विषय सूची
1. [Overview / परिचय](#-overview--परिचय)
2. [Key Features / प्रमुख विशेषताएं](#-key-features--प्रमुख-विशेषताएं)
3. [Tech Stack / प्रयुक्त तकनीक](#-tech-stack--प्रयुक्त-तकनीक)
4. [Prerequisites / आवश्यक सॉफ्टवेयर](#-prerequisites--आवश्यक-सॉफ्टवेयर)
5. [Quick Start Guide / प्रोजेक्ट कैसे रन करें (Step-by-Step)](#-quick-start-guide--प्रोजेक्ट-कैसे-रन-करें-step-by-step)
6. [Available NPM Scripts / उपलब्ध कमांड](#-available-npm-scripts--उपलब्ध-कमांड)
7. [Project Directory Structure / प्रोजेक्ट संरचना](#-project-directory-structure--प्रोजेक्ट-संरचना)
8. [Configuration & Customization / कस्टमाइजेशन गाइड](#-configuration--customization--कस्टमाइजेशन-गाइड)
9. [Troubleshooting & FAQs / सामान्य समस्याएं एवं समाधान](#-troubleshooting--faqs--सामान्य-समस्याएं-एवं-समाधान)

---

## 🌐 Overview / परिचय

**Power of Markets (POM)** is a modern, high-performance financial education portal built for serious stock market learners, derivatives traders, and quantitative finance students. Engineered with institutional rigor, it dismantles speculative "tips" culture and provides mathematical edge, Option Greeks analytics, liquidity-sweep structure, and capital preservation frameworks.

**हिन्दी विवरण:**  
Power of Markets (POM) स्टॉक मार्केट, ऑप्शंस ट्रेडिंग, प्राइस एक्शन और रिस्क मैनेजमेंट सीखने के लिए एक अत्याधुनिक वेब ऐप्लिकेशन है। इसमें डार्क-थीम स्टॉक मार्केट बैनर, लाइव इंडेक्स टिकर स्ट्रिप (NIFTY 50, BANK NIFTY, INDIA VIX), इंटरैक्टिव क्वांटिटेटिव ऑप्शन्स टर्मिनल, स्टूडेंट एलएमएस (LMS) डैशबोर्ड और कंपलीट कोर्स एनरोलमेंट सिस्टम शामिल है।

---

## ✨ Key Features / प्रमुख विशेषताएं

- 🎯 **Dark Institutional Banner with Stock Market Gradients**:
  - Deep midnight-navy palette (`#020713` → `#051739` → `#041026`) with ambient glow effects.
  - Live NSE/BSE Market Ticker displaying real-time indices (NIFTY 50, BANK NIFTY, INDIA VIX, SENSEX, FINNIFTY).
  - Interactive **POM Market Risk Terminal** with live candlestick charts and dynamic Option Greeks inspection (**Δ Delta**, **Γ Gamma**, **Θ Theta**, **ν Vega**).
- 🧭 **Clean Floating Header & Navigation**:
  - Official Power of Markets (POM) high-definition SVG logo.
  - High-contrast navigation links (Home, Courses, Webinars, Membership, About, Blog, Contact).
  - Primary CTA button **"Explore Courses"**, direct Student Portal access, and persistent cart count.
  - Fully responsive mobile drawer menu.
- 🎓 **360° Financial Market Curriculums**:
  - Complete course catalog with module breakdown, downloadable resources, lesson previews, and instructor credentials.
  - Zero-Tip policy and SEBI educational adherence statements.
- 🖥️ **Integrated Student LMS Dashboard**:
  - Direct student portal showing enrolled curriculums, lesson completion progress bars, downloadable Excel models, and official certificate generation.
- 🛒 **Cart & Seamless Checkout**:
  - Add to cart, promo code redemption (e.g. `POM10`), GST calculation, and instant course activation.
- 🎙️ **Live & Recorded Interactive Webinars**:
  - Instant webinar registration with seat counter and past session recording archives.
- 📱 **100% Responsive Design**:
  - Pixel-perfect layout across mobile smartphones, tablets, laptops, and ultra-wide trading monitors.

---

## 🛠️ Tech Stack / प्रयुक्त तकनीक

- **Frontend Framework**: [React 19](https://react.dev/) (Functional Components, Custom Hooks)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/) (Lightning fast HMR & build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Iconography**: [Lucide React](https://lucide.dev/) (Modern vector icons)
- **Animation**: [Motion](https://motion.dev/) (Smooth interactions & transitions)

---

## 📋 Prerequisites / आवश्यक सॉफ्टवेयर

Before running the project on your computer, ensure you have the following installed:

1. **Node.js**: Version **`18.18.0`** or **`20.x`** or higher (Recommended: LTS version).  
   Check your version in terminal:
   ```bash
   node -v
   ```
2. **npm** (comes bundled with Node.js) or **pnpm** / **yarn**:  
   ```bash
   npm -v
   ```
3. A code editor like **VS Code**, **Cursor**, or **WebStorm**.

---

## 🚀 Quick Start Guide / प्रोजेक्ट कैसे रन करें (Step-by-Step)

Follow these simple steps to get the development server running locally:

### Step 1: Open Terminal in Project Folder (प्रोजेक्ट फ़ोल्डर में टर्मिनल खोलें)
Open your terminal (Command Prompt, PowerShell, Git Bash, or macOS Terminal) and navigate to the project directory:
```bash
cd power-of-markets
```

### Step 2: Install Dependencies (ज़रूरी पैकेज इंस्टॉल करें)
Run the following command to download all necessary libraries:
```bash
npm install
```
> *Note: If you encounter any peer dependency issues on older Node versions, you can use:*
> ```bash
> npm install --legacy-peer-deps
> ```

### Step 3: Start the Development Server (डेवलपमेंट सर्वर चालू करें)
Run the dev script:
```bash
npm run dev
```

### Step 4: Open in Your Browser (ब्राउज़र में खोलें)
Once the server starts, you will see output like this in your terminal:
```text
  VITE v8.3.0  ready in 240 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.x:3000/
  ➜  press h + enter to show help
```
Open **[http://localhost:3000](http://localhost:3000)** in Chrome, Edge, Safari, or Firefox to view the platform!

---

## 📜 Available NPM Scripts / उपलब्ध कमांड

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Start Dev** | `npm run dev` | Runs the local development server at `http://localhost:3000` with instant hot-reloading. |
| **Build Project** | `npm run build` | Compiles and bundles production-ready static assets into the `dist/` directory. |
| **Preview Build** | `npm run preview` | Spins up a local web server to test the production build from the `dist/` folder. |
| **Type Check** | `npm run lint` | Runs `tsc --noEmit` to verify TypeScript types and prevent runtime errors. |
| **Clean Assets** | `npm run clean` | Deletes the `dist/` folder and build artifacts for a fresh start. |

---

## 📂 Project Directory Structure / प्रोजेक्ट संरचना

```text
├── index.html                     # Main HTML template with SEO tags & theme settings
├── package.json                   # Dependencies, scripts, and project metadata
├── vite.config.ts                 # Vite bundler configuration & Tailwind plugin
├── tsconfig.json                  # TypeScript compiler settings
├── metadata.json                  # AI Studio platform configuration
│
└── src/
    ├── main.tsx                   # React root entry point
    ├── App.tsx                    # Top-level state management, routing & modals
    ├── index.css                  # Global styles, color schemes & custom grid utilities
    ├── types.ts                   # Central TypeScript interfaces (Courses, User, Cart, etc.)
    │
    ├── components/
    │   ├── brand/
    │   │   └── PomLogo.tsx        # High-resolution Power of Markets brand SVG logo
    │   ├── common/
    │   │   ├── Header.tsx         # Clean navigation bar with menu, logo & action CTAs
    │   │   └── Footer.tsx         # Institutional footer with links, SEBI notice & disclaimer
    │   ├── home/
    │   │   ├── HeroSection.tsx    # Dark gradient banner with NSE/BSE ticker & Greeks terminal
    │   │   ├── FeaturedCoursesSection.tsx  # Core course highlight cards
    │   │   ├── WhyPomSection.tsx  # Pedagogy & quantitative methodology pillars
    │   │   ├── FounderSection.tsx # Abhishek Upadhyay's profile & credentials
    │   │   ├── UpcomingWebinarsSection.tsx # Live masterclasses & seats counter
    │   │   ├── FaqAccordionSection.tsx     # Frequently asked questions
    │   │   ├── CategoriesSection.tsx       # Subject category filters
    │   │   └── ContactCtaSection.tsx       # Quick advisory enrollment banner
    │   └── modals/
    │       ├── VideoOverviewModal.tsx      # Video curriculum trailer player modal
    │       └── WebinarRegisterModal.tsx    # Instant live webinar seat registration
    │
    ├── pages/
    │   ├── HomePage.tsx           # Complete landing page experience
    │   ├── CoursesPage.tsx        # Searchable and filterable course catalog
    │   ├── CourseDetailPage.tsx    # In-depth curriculum breakdown & syllabus syllabus
    │   ├── WebinarsPage.tsx       # Upcoming and archived masterclasses
    │   ├── MembershipPage.tsx     # Tiered subscription plans & benefits
    │   ├── StudentDashboardPage.tsx # Enrolled courses, video progress & certificates
    │   ├── CartCheckoutPage.tsx   # E-commerce cart, discount coupon & order confirmation
    │   ├── BlogPage.tsx           # Market insights, structure breakdowns & articles
    │   ├── AboutPage.tsx          # Institutional mission, values & instructor history
    │   ├── ContactPage.tsx        # Support form, direct WhatsApp & office details
    │   ├── CareersPage.tsx        # Open roles at Power of Markets
    │   └── LegalPage.tsx          # Privacy policy, Terms of Use & SEBI Disclaimers
    │
    └── data/
        └── mockData.ts            # Realistic market data, course curriculums & FAQs
```

---

## ⚙️ Configuration & Customization / कस्टमाइजेशन गाइड

### 1. Changing Courses or Curriculums
All courses, modules, prices, and instructor bios are centralized in `src/data/mockData.ts`. You can edit course prices, titles, syllabus chapters, and FAQ questions directly in this file without modifying component logic.

### 2. Changing the Brand Color Palette
The platform uses the following institutional color system:
- **Primary Deep Navy**: `#071F49`
- **Secondary Midnight**: `#030D22`
- **Accent Royal Blue**: `#0767DF`
- **Electric Cyan**: `#0AA8EF`
- **Bullish Market Green**: `#159B72`
- **Neutral Light Background**: `#F8FAFC`

These colors are utilized in Tailwind utility classes across all components for consistent branding.

### 3. Modifying Dev Server Port
By default, the development server is configured to run on port `3000` via `package.json`:
```json
"dev": "vite --port=3000 --host=0.0.0.0"
```
To run on a different port (e.g., `5173`), simply adjust the `--port` flag in `package.json`.

---

## ❓ Troubleshooting & FAQs / सामान्य समस्याएं एवं समाधान

### Q1: `Error: listen EADDRINUSE: address already in use :::3000`
**कारण:** Port 3000 पर पहले से कोई अन्य प्रोग्राम चल रहा है।  
**समाधान:**
- विंडोज (Windows):
  ```bash
  netstat -ano | findstr :3000
  taskkill /PID <PID_NUMBER> /F
  ```
- मैक / लिनक्स (Mac/Linux):
  ```bash
  lsof -ti:3000 | xargs kill -9
  ```
- या `package.json` में `"dev": "vite --port=3001 --host=0.0.0.0"` बदलें।

---

### Q2: `npm install` में कोई पैकेज एरर आता है
**समाधान:**
1. Node.js का वर्ज़न चेक करें (कम से कम Node 18+ होना चाहिए)।
2. नोड कैश साफ़ करें और फिर से इंस्टॉल करें:
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

---

### Q3: प्रोडक्शन डिप्लॉयमेंट (Deployment to Vercel / Netlify / Cloud Run) कैसे करें?
1. रन करें:
   ```bash
   npm run build
   ```
2. यह एक `dist` फोल्डर तैयार करेगा जिसमें सभी ऑप्टिमाइज्ड HTML, CSS और JS फ़ाइलें होंगी।
3. `dist` फ़ोल्डर को किसी भी स्टैटिक होस्टिंग (Vercel, Netlify, Firebase Hosting, AWS S3 / CloudFront, या Nginx) पर डिप्लॉय कर सकते हैं।
4. **Build Command**: `npm run build`
5. **Publish Directory**: `dist`

---

## ⚖️ Legal & SEBI Disclaimer

> **Educational Disclaimer:** Power of Markets (POM) is an educational and analytical research platform. We do not provide financial advisory, stock tips, guaranteed return schemes, or portfolio management services. Trading derivatives and equity markets carries substantial financial risk; participants are advised to consult SEBI-registered advisors before deploying real capital.

---

**Developed with precision for Power of Markets learners.**  
For assistance or questions, visit the **Contact Page** or reach out via official POM channels.
