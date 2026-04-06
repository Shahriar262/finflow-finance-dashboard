# 💰 FinFlow - Modern Financial Dashboard

FinFlow is a high-performance, responsive financial management dashboard built with **React**, **Tailwind CSS**, and **Framer Motion**. It provides a seamless experience for tracking daily transactions, managing budget roles, and monitoring financial health with a "Dribbble-style" premium UI.

![FinFlow Dashboard Preview](https://via.placeholder.com/800x450?text=FinFlow+Dashboard+Preview)

## ✨ Key Features

- **📊 Comprehensive CRUD:** Effortlessly add, view, and delete transactions with real-time updates.
- **🔐 Role-Based Access (RBAC):** Switch between **Admin** and **Viewer** modes to simulate real-world permission handling.
- **🌗 Smart Dark Mode:** Fully optimized dark and light themes with smooth transitions using CSS variables and Tailwind.
- **📱 Pixel Perfect Responsiveness:** Tailored experience for Mobile, Tablet, and Desktop with adaptive layouts.
- **🔍 Advanced Filtering:** Search through transactions by description or category and filter by income/expense type.
- **✨ Micro-interactions:** Engaging animations like the pulsing profile indicator and smooth modal transitions.

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/) (Functional Components, Hooks)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom configurations)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **State Management:** React Context API
- **Routing:** React Router v6

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/your-username/finflow-dashboard.git](https://github.com/your-username/finflow-dashboard.git)
   ```

2. **Navigate to the project directory:**

```bash
cd finflow-dashboard
```

Install dependencies:

3. **Install dependencies:**

```bash
npm install
Start the development server:
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Build for production:**

```bash
npm run build
```

## 📂 Project Structure

- src/
  ├── components/ # Reusable UI components (Sidebar, Navbar, Table)
  ├── context/ # Global State Management (AppContext)
  ├── pages/ # Page-level components (Transactions, Overview)
  ├── assets/ # Static assets and images
  └── App.js # Main application entry and routing

## 🛡️ Best Practices Implemented

- Clean Code: Modular component structure for easy maintainability.

- Performance: Optimized rendering using React Hooks.

- UX/UI: Focused on high-contrast readability and accessibility (a11y).

- Security: Logic-gate implementation for Admin-only features (e.g., Add/Delete buttons)
