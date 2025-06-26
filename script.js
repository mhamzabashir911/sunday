// Function to show the specific page
function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function(pageElement) {
    pageElement.style.display = 'none';
  });
  // Show the selected page
  document.getElementById(page).style.display = 'block';
}

// Function to move the "No" button when clicked
function moveButton(button) {
  // Get random position for the "No" button
  const randomX = Math.random() * (window.innerWidth - button.offsetWidth); // X position
  const randomY = Math.random() * (window.innerHeight - button.offsetHeight); // Y position

  // Move button to random position
  button.classList.add('moved');
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';

  // Don't transition to the next page for "No"
}
