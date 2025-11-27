# APPOINTMENT-BOOKING

# The Unique Fusion - Salon Booking Website

A modern, responsive landing page and appointment booking system for "The Unique Fusion" unisex salon. This project features a polished user interface, service listings, and an interactive multi-step booking wizard built with vanilla JavaScript and Tailwind CSS.

## 🌟 Features

  * **Responsive Design:** Fully adaptive layout that works on mobile, tablet, and desktop devices (powered by Tailwind CSS).
  * **Dynamic Content:** Services, prices, and stylist profiles are rendered dynamically via JavaScript objects, making updates easy.
  * **Multi-Step Booking Wizard:**
      * **Step 1:** Select from a list of services (Haircut, Color, Keratin, etc.).
      * **Step 2:** Choose a preferred stylist.
      * **Step 3:** Pick a date and view simulated available time slots.
      * **Step 4:** Enter contact details and confirm.
  * **Smart Validations:** Prevents users from skipping steps without making a selection.
  * **Interactive UI:** Custom-styled radio buttons, step progress indicators, and hover effects.
  * **Contact Section:** Integrated Google Maps embed placeholder and business information.

## 🛠️ Technologies Used

  * **HTML5:** Semantic structure.
  * **CSS3 & Tailwind CSS:** Styling and layout (Tailwind is loaded via CDN).
  * **JavaScript (ES6+):** DOM manipulation, form logic, and mock data handling.
  * **Google Fonts:** Inter and Playfair Display.

## 📂 Project Structure

```text
├── index.html      # Main HTML structure
├── style.css       # Custom animations and overrides
├── script.js       # Application logic and data (Services/Stylists arrays)
└── README.md       # Project documentation
```

## 🚀 How to Run

Since this project uses client-side technologies and a CDN for Tailwind CSS, no build step or package manager (npm/yarn) is required.

1.  **Clone or Download** the repository.
2.  **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge).
3.  **That's it\!** The site should load immediately.

> **Note:** For the best experience during development, it is recommended to use a local server (like VS Code's "Live Server" extension) to avoid CORS issues with certain browser security settings, though this project generally works via direct file opening.

