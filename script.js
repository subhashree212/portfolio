
// Typewriter effect
const roles = ["Backend Developer", "Software Engineer", "Node.js Developer", "API Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.getElementById("role-text");

function typeWriter() {
  const current = roles[roleIndex];
  if (isDeleting) {
    roleEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }
  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => isDeleting = true, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  setTimeout(typeWriter, isDeleting ? 60 : 100);
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".skill-card, .project-card, .contact-card").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute("id");
  });
  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) a.classList.add("active");
  });
});

window.addEventListener("load", typeWriter);
