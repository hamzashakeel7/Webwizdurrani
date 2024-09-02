// ----------------------------show menu---------------------

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// -----------Remove menu mobile----------

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// -----------Shadow header----------------

const ShadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", ShadowHeader);

// -----------Email js------------

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_2m2xfjt",
      "template_f8xo27e",
      "#contact-form",
      "BpGEaEw6ZxhCSQL8e"
    )
    .then(
      () => {
        // show sent message
        contactMessage.textContent = "Message sent successfully ✔";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // clearing input fields
        contactForm.reset();
      },
      () => {
        // error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

// -----Show scroll up-------
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// -----------Dark theme --------

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Set default theme as dark if no theme was selected previously
if (!selectedTheme) {
  document.body.classList.add(darkTheme); // Apply dark theme by default
  themeButton.classList.add(iconTheme); // Set icon to sun to indicate dark mode is on
} else {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Save the theme and the current icon that the user chose
  try {
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  } catch (error) {
    console.error("Failed to save theme settings:", error);
  }
});

// --------------------------------draggable ball animatuion-----------------------
const container = document.querySelector(".tech-container");
const techIcons = document.querySelectorAll(".tech-icon");

techIcons.forEach((icon) => {
  icon.addEventListener("dragstart", dragStart);
  icon.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.style.transform = "scale(1.2)";
}

function dragEnd(e) {
  e.target.style.transform = "scale(1)";
  // Simulate a bounce effect on drop
  e.target.animate([{ transform: "scale(1.2)" }, { transform: "scale(1)" }], {
    duration: 300,
    easing: "ease-out",
  });
}

// ----------------------------------------------Scroll reveal----------------------------------

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset : true //animations repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail`, { origin: "right" });
sr.reveal(
  `.home__name, .home__info, .about__info, .about__container .section__title-1,
            .contact__social, .contact__data`,
  { origin: "left" }
);
sr.reveal(`.services__card, .projects__card`, { interval: 100 });
