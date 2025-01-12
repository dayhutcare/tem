// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Get popup and button elements
    const popup = document.getElementById('anniversaryPopup');
    const closeButton = document.getElementById('closeButton');
    
    // Function to close popup
    function closePopup() {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none'; 
        }, 500); // Wait for the transition to finish
    }

    // Add click event listener to button
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }
    
    // Show popup immediately when page loads
    popup.style.display = 'flex';
    popup.style.opacity = '1'; 
});
