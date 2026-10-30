
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

// Close the menu after selecting a section
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// Add the current year to the footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// YOUR BUSINESS DETAILS
const whatsappNumber = ""; // Add your number with country code
const instagramUrl = "";   // Add your Instagram profile URL

// Product enquiry buttons
document.querySelectorAll(".enquire").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      alert(
        "Thanks for your interest in " + product +
        "! The owner needs to add the business WhatsApp number first."
      );
      return;
    }

    const message =
      "Hello Line and Leash! I would like to enquire about " +
      product + ". Please share the price and details.";

    const url =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank", "noopener,noreferrer");
  });
});

// Contact button
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (instagramUrl) {
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
  } else {
    alert(
      "Welcome! Please add your Instagram profile URL " +
      "to script.js to activate this contact link."
    );
  }
});
