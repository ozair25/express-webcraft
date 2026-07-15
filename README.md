# Express Webcraft (EWC)

A luxury, high-performance digital presence and elite design consultancy portal. Express Webcraft delivers custom, master-crafted web applications with elegant editorial typography, fluid layouts, and seamless, high-speed user experiences.

---

## 🎨 Design Philosophy & Visual System

- **Sophisticated Palette**: Premium dark-blue and cream tones with warm gold highlights that reflect a curated, elite aesthetic.
- **Editorial Typography**: A premium pairing of display and sans-serif typefaces to establish an immediate sense of craftsmanship and visual rhythm.
- **Micro-Animations**: Purposeful, non-gratuitous animations utilizing `motion` to guide the user's attention seamlessly across project displays and custom forms.
- **Bespoke Viewfinder HUD**: Beautiful framing ornaments and viewfinder layout elements that reinforce a premium, high-contrast visual focus.

---

## 🚀 Key Features

1. **Our Services Portal**: An interactive showcase detailing specialized high-performance capabilities, custom-engineered digital systems, and elite design audits.
2. **Dynamic Project Showcase**: A deep portfolio displaying real, elite client products (e.g., Gopalji Khopra, Shree Kalyan, and others) with real-time responsive mockups and active live views.
3. **B2B Bulk Inquiry Tunnel**: A fully validated, multi-step proposal submission funnel with robust validation schemas, ensuring complete privacy and data security.
4. **Secure Admin Dashboard**: A secure, isolated administrative console accessible at `/ozairadmin` to view, sort, and manage incoming agency client requests in real time.
5. **SEO & Performance Tuned**: Standard sitemap and robots policies, strict metadata configurations, optimized next-gen image pipelines, and lightning-fast loading calibrations.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router architecture)
- **Styling Engine**: [Tailwind CSS](https://tailwindcss.com/) with PostCSS
- **Animation**: [Motion](https://motion.dev/)
- **Database & Auth**: [Firebase](https://firebase.google.com/) (Firestore for secure client leads, Firebase Authentication for admin verification)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 💻 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or newer) and `npm` installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 3. Environment Setup

Create a `.env` or `.env.local` file in the root of the project with the following configuration placeholders:

```env
# Public Firebase Configurations
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Server-Side Keys
CRAFT_API_KEY=your_private_api_key
```

### 4. Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Production Build

To compile and optimize the application for production deployment:

```bash
npm run build
```

To run the production-ready server locally:

```bash
npm run start
```

---

## 🛡️ Security & Performance Parameters

Express Webcraft operates with a zero-compromise approach to digital security and client privacy:
- **Server-Side API Proxying**: Sensitive data operations are executed server-side.
- **Rate-Limiting & Validation**: Comprehensive server-side validation using structured schema logic.
- **Strict Content Security Policies (CSP)**: Robust, pre-configured security headers to mitigate scripts or frame injection.

---

## 📄 License

This portal is proprietary software. All rights reserved. Custom visual assets, copy, and layout schemas are under the direct ownership of Express Webcraft.
