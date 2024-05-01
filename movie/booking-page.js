document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "Book Now" button
    var bookNowButton = document.getElementById("book-now");
    bookNowButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the button
        alert("Directing to Payment!"); // Display a simple alert
        // You can add additional functionality here, such as redirecting to a payment page or showing a confirmation modal
    });
});
