// Smooth Scroll for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// Contact Form Submission Alert
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    this.reset();
  });
