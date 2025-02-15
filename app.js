$(document).ready(function () {
    $('.menu-button').click(function (event) {
        event.stopPropagation();
        $('.nav-menu').fadeToggle(); // Show/hide red menu box
        $('.overlay').fadeToggle();  // Show/hide partial overlay
        $('.menu-button').toggleClass('active'); // Toggle button state
    });

    // Click on overlay to close menu
    $('.overlay').click(function () {
        $('.nav-menu').fadeOut(); // Hide menu
        $('.overlay').fadeOut();  // Hide overlay
        $('.menu-button').removeClass('active'); // Reset button state
    });

    // Prevent menu from closing when clicking inside
    $('.nav-menu').click(function (event) {
        event.stopPropagation();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contactform"); // Correct selector
    const successMessage = document.querySelector(".successMessage"); // Correct selector

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        successMessage.style.display = "block";
        form.reset();

    });
});

