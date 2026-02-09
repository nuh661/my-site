const button = document.getElementById("scrollBtn");
const form = document.getElementById("form");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  if (name && phone) {
    message.textContent = "Спасибо! Я скоро свяжусь с вами.";
    form.reset();
  }
});
