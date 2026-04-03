# Finance Dashboard UI

**Frontend Developer Intern Assignment**  

A clean and interactive finance dashboard built with **React** and **Tailwind CSS** to track and visualize financial activity.

---

## 🔗 Live Demo
[View Live Demo](https://finance-dashboard-green-nu.vercel.app/)

---

## 📝 Project Overview

This project simulates a **finance dashboard** for users to track their financial activity. It demonstrates:

- Dashboard overview with key metrics.
- Transaction management.
- Insights and visualizations.
- Light/Dark mode toggle.
- Simulated role-based UI (viewer/admin).

The goal is to showcase **frontend development skills**, component structuring, state management, and UI design.

---

## ⚡ Features

### Dashboard Overview
- Summary cards:
  - **Total Balance**
  - **Total Income**
  - **Total Expenses**
- Time-based visualization (Line Chart: Expense/Income trends)
- Category-based visualization (Pie Chart: Spending breakdown)

### Transactions
- Lists all transactions with:
  - Date
  - Category
  - Type (Income/Expense)
  - Amount
- Supports basic filtering by type.

### Role-Based UI
- **Viewer:** Read-only access
- **Admin:** Can add transactions (frontend simulation)
- Role switcher available in UI

### Insights Section
- Current month summary (Income, Expense, Savings)
- Highest spending category
- Financial warning if expenses exceed income

### Theme Toggle
- Switch between **Light** and **Dark** mode using a button.
- UI responds to theme changes dynamically.

### State Management
- `AppContext` for transactions and role
- `ThemeContext` for light/dark theme

---

## 📂 Project Structure
finance-dashboard/
├─ src/
│ ├─ components/ # Reusable UI components
│ ├─ context/ # Theme and App contexts
│ ├─ pages/ # Dashboard, Transactions, Insights
│ ├─ Layout.jsx # Layout with sidebar and main content
│ └─ App.jsx # Routing and main component
├─ index.css # Tailwind CSS imports
├─ main.jsx # Entry point
├─ tailwind.config.js # Tailwind configuration
└─ package.json

## 🛠 Technologies Used

- **React** – Component-based frontend framework
- **Tailwind CSS** – Utility-first styling
- **Recharts** – Chart visualizations (Line, Pie)
- **React Context API** – State management
- **React Router DOM** – Client-side routing
- **Lucide Icons** – Icons for dashboard

---

## 🚀 Installation & Running Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/finance-dashboard.git
cd finance-dashboard
