
// Adventure Escape SA - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation dropdown
    const menuButton = document.getElementById("menuButton");
    const navigationMenu = document.getElementById("navigationMenu");

    if (menuButton && navigationMenu) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigationMenu.classList.toggle("show");
            menuButton.setAttribute("aria-expanded", isOpen);
        });
    }

    // 2. Contact form validation and error handling
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");
            const errorMessage = document.getElementById("errorMessage");
            const successMessage = document.getElementById("successMessage");

            let errors = [];

            if (!name || name.value.trim() === "") {
                errors.push("Please enter your full name.");
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                errors.push("Please enter a valid email address.");
            }

            if (!message || message.value.trim() === "") {
                errors.push("Please enter your message.");
            }

            if (errorMessage) {
                errorMessage.textContent = errors.join(" ");
            }

            if (successMessage) {
                successMessage.textContent = "";
            }

            if (errors.length === 0) {
                if (successMessage) {
                    successMessage.textContent =
                        "Thank you! Your enquiry has been received.";
                }

                if (errorMessage) {
                    errorMessage.textContent = "";
                }

                contactForm.reset();
            }
        });
    }

    // 3. Package table interaction
    const packageRows = document.querySelectorAll(".package-row");

    packageRows.forEach(function (row) {
        row.addEventListener("click", function () {
            row.classList.toggle("selected");
        });
    });

    // 4. Booking button interaction
    const bookingButtons = document.querySelectorAll(".booking-button");

    bookingButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.stopPropagation();

            alert("Thank you for choosing Adventure Escape SA! Please contact us to complete your booking.");
        });
    });

    // 5. Footer current year
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
