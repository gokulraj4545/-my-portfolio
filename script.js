
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
