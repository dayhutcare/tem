// Function to close the popup
function closePopup() {
    document.getElementById('anniversaryPopup').style.display = 'none';
}

// Function to show popup when page loads
window.addEventListener('load', function() {
    // Check if popup has been shown before
    if (!localStorage.getItem('popupShown')) {
        document.getElementById('anniversaryPopup').style.display = 'flex';
        // Set flag in localStorage (optional - remove if you want to show popup every time)
        localStorage.setItem('popupShown', 'true');
    }
});