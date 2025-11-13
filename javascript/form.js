document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submission

  const form = event.target;
  const formData = new FormData(form);

  // Send data to Formspree
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // Redirect to your custom thank-you page after successful submission
      window.location.href = "thankyou.html";
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  })
  .catch(error => {
    alert("Oops! There was a problem submitting your form.");
  });
});
