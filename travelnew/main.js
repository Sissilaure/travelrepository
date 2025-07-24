document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("response").textContent =
        "Thank you! We will contact you soon.";
      form.reset();
    });
  }
});
