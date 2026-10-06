document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });

        // Close menu after clicking a navigation link
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mainNav.classList.remove("active");
            });
        });
    }


    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const faqItem = question.parentElement;
            const answer = faqItem.querySelector(".faq-answer");

            faqItem.classList.toggle("active");

            if (faqItem.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }

        });

    });

});

