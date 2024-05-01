document.addEventListener("DOMContentLoaded", function() {
    var paymentForm = document.getElementById("payment-form");

    paymentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        // Show pop-up window
        alert("Booking Successful!");
    });
});
