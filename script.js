const scriptURL = 'https://script.google.com/macros/s/AKfycbyfIjPvT4xrWrfW2tliZC8ESd8MgbQon7xwNHNgLjsHmwfAnZNwUBX7_nnvXvWJuE1xpw/exec';

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseDiv = document.getElementById("formResponse");

  if (!name || !email || !message) {
    responseDiv.innerText = "❌ Please fill in all fields.";
    return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    responseDiv.innerText = `✅ Thank you, ${name}! Your message has been received.`;
    this.reset(); 
  })
  .catch(error => {
    console.error('Error!', error.message);
    responseDiv.innerText = "❌ Something went wrong. Please try again.";
  });
});
