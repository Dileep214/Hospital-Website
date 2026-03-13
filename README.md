# Shankar Children's Hospital Website

Welcome to the official front-end repository for the **Shankar Children's Hospital** website. This is a modern, responsive, and highly interactive web application built to provide information about the hospital's services, doctors, and facilities, while also offering an intelligent AI assistant to help patients and parents navigate their medical needs.

## 🚀 Tech Stack

The application is built leveraging modern web development technologies:

- **Frontend Framework**: [React 19](https://react.dev/) integrated with [Vite](https://vitejs.dev/) for blazing fast development and optimized production builds.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for a utility-first, fully responsive design system.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for buttery-smooth page transitions, hover effects, and widget animations.
- **Icons**: [Lucide React](https://lucide.dev/) for clean, consistent, and scalable SVG icons.
- **Typography**: Optimized loading for custom fonts (Poppins, Nunito, Inter) via `@fontsource`.
- **AI Chatbot API**: Communicates with a custom [Node.js / Express](https://expressjs.com/) backend that uses Retrieval-Augmented Generation (RAG) and the [Groq API](https://groq.com/) for lightning-fast, highly accurate contextual responses.

---

## ✨ Key Features & Sections

The architecture is cleanly separated into reusable React components and layout sections:

1. **Navigation & Footer** (`Navbar`, `Footer`): Persistent navigation and contact information.
2. **Hero Section** (`Hero`): The main welcoming banner presenting the hospital's core message.
3. **About Us** (`About`): Information about the children's hospital mission and legacy.
4. **Services** (`Services`): Detailed lists of pediatric and specialized treatments.
5. **Wellness Programs** (`Wellness`): Holistic and preventative care programs.
6. **Our Doctors** (`Doctors`): Profiles of top pediatric specialists.
7. **Emergency** (`Emergency`): Critical contact and immediate action protocols.
8. **FAQ & Trust Indicators** (`FAQ`, `Trust`): Common queries and reassuring statistics/testimonials.
9. **Floating AI Assistant Widget** (`ChatWidget`): 
   - A modern support widget mounted globally on all pages.
   - Allows users to ask questions specifically regarding hospital policies, timings, and services.
   - Automatically detects intents to book appointments and smoothly redirects users to the official Shankar Children's Hospital mobile app on the Google Play Store.

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) and `npm` installed on your machine.

### Installation & Run

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Dileep214/Hospital-Website.git
   cd Hospital-Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**: Ensure the terminal outputs the local URL (usually `http://localhost:5173/`) and open it in your browser.

---

## 🤖 The Chatbot Integration

The website features a live chat interface built natively into the React app. Instead of a bulky iframe, it uses pure React state and Framer Motion for a seamless experience.

- **API Endpoint**: `https://chatbot-helper-1.onrender.com/api/chat`
- **Logic**: The widget sends the user's input to the backend, parses the AI response, formats it into a chat bubble, and handles direct actions (like App Store redirects triggered by the `shouldRedirect` flag from the Node.js controller).

## 📄 License & Ownership

Created for Shankar Children's Hospital. All rights reserved.
