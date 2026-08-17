// =========================================================
// RUTIK PAWAR PORTFOLIO - COMPLETE JAVASCRIPT
// =========================================================


// =========================================================
// 1. NAVBAR - MOBILE MENU
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // Change hamburger icon
        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// =========================================================
// 2. CLOSE MOBILE MENU AFTER CLICKING LINK
// =========================================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// =========================================================
// 3. NAVBAR EFFECT ON SCROLL
// =========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 22, 0.92)";

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.background =
            "rgba(5, 8, 22, 0.65)";

        header.style.boxShadow = "none";

    }

});


// =========================================================
// 4. FOOTER YEAR
// =========================================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// =========================================================
// 5. SCROLL TO TOP BUTTON
// =========================================================

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// =========================================================
// 6. ACTIVE NAVIGATION LINK
// =========================================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.style.color = "";

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.style.color = "#38bdf8";

        }

    });

});


// =========================================================
// 7. SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-title, .about-text, .about-card, .skill-card, .project-main, .education-card, .contact-info, .contact-form"
);


// Add initial hidden state
revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// =========================================================
// 8. STAGGER ANIMATION FOR SKILL CARDS
// =========================================================

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(function (card, index) {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


// =========================================================
// 9. TYPING EFFECT
// =========================================================

const heroTitle =
    document.querySelector(".hero h2");

if (heroTitle) {

    const text =
        "Java Full Stack Developer";

    let index = 0;

    heroTitle.textContent = "";

    function typeText() {

        if (index < text.length) {

            heroTitle.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 80);

        }

    }

    setTimeout(typeText, 1000);

}


// =========================================================
// 10. CONTACT FORM VALIDATION
// =========================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            // Empty field validation

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            // Email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            // Create email

            const subject =
                encodeURIComponent(
                    "Portfolio Contact from " + name
                );


            const body =
                encodeURIComponent(

                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" +
                    message

                );


            // Open user's email application

            window.location.href =
                "mailto:rutikpawar0410@gmail.com" +
                "?subject=" +
                subject +
                "&body=" +
                body;

        }
    );

}


// =========================================================
// 11. BUTTON RIPPLE EFFECT
// =========================================================

const buttons =
    document.querySelectorAll(".btn, .project-btn");


buttons.forEach(function (button) {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement("span");


            ripple.style.position =
                "absolute";

            ripple.style.width =
                "20px";

            ripple.style.height =
                "20px";

            ripple.style.borderRadius =
                "50%";

            ripple.style.background =
                "rgba(255,255,255,0.5)";

            ripple.style.transform =
                "scale(0)";

            ripple.style.animation =
                "rippleEffect 0.6s linear";

            ripple.style.pointerEvents =
                "none";


            const rect =
                button.getBoundingClientRect();


            ripple.style.left =
                (event.clientX - rect.left) + "px";

            ripple.style.top =
                (event.clientY - rect.top) + "px";


            button.appendChild(ripple);


            setTimeout(function () {

                ripple.remove();

            }, 600);

        }
    );

});


// =========================================================
// 12. PROJECT CARD TILT EFFECT
// =========================================================

const projectCard =
    document.querySelector(".project-main");


if (projectCard) {

    projectCard.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                projectCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -3;


            const rotateY =
                ((x - centerX) / centerX) * 3;


            projectCard.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        }
    );


    projectCard.addEventListener(
        "mouseleave",
        function () {

            projectCard.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

        }
    );

}


// =========================================================
// 13. MOUSE GLOW EFFECT
// =========================================================

const glow =
    document.createElement("div");


glow.style.position =
    "fixed";

glow.style.width =
    "250px";

glow.style.height =
    "250px";

glow.style.borderRadius =
    "50%";

glow.style.pointerEvents =
    "none";

glow.style.background =
    "radial-gradient(circle, rgba(56,189,248,0.10), transparent 70%)";

glow.style.transform =
    "translate(-50%, -50%)";

glow.style.zIndex =
    "-1";


document.body.appendChild(glow);


document.addEventListener(
    "mousemove",
    function (event) {

        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    }
);


// =========================================================
// 14. CONSOLE MESSAGE
// =========================================================

console.log(
    "%c Welcome to Rutik Pawar's Portfolio 🚀 ",
    "background:#38bdf8;color:#050816;font-size:16px;font-weight:bold;padding:10px;"
);

console.log(
    "%c Java Full Stack Developer | Portfolio ",
    "color:#8b5cf6;font-size:14px;font-weight:bold;"
);