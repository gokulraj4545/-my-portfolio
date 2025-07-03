document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formResponse").innerText = `Thank you, ${name}! Your message has been received.`;
    this.reset();
  } else {
    document.getElementById("formResponse").innerText = "Please fill in all fields.";
  }
});
