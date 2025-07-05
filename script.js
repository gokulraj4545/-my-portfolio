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
const scriptURL = 'https://script.google.com/macros/s/AKfycbzESJsi3hO51zCnl7OvcxA7HBku2Lm8uwU7K2gGSKHR6xueGSngRE530NyUrx6OJEDo/exec';

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  
  const form = e.target;

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => alert("✅ Message sent successfully!"))
  .catch(error => alert("❌ Something went wrong."));
});
