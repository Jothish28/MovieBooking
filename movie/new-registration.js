document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Registration successful!");
      // You can add further actions here, like redirecting to another page
    });
  });
  