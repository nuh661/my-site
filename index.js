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
const email = document.getElementById("email").value;
const text = document.getElementById("text").value;

if(name && email && text){
message.textContent = "Спасибо! Я скоро свяжусь с вами.";
form.reset();
}
});
