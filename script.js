// ✅ Use FormData (no JSON)
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
