document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');

    // Retrieve user preference from localStorage
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
        button.style.backgroundColor = savedColor;
    }

    // Function to handle button click
    button.addEventListener('click', () => {
        // Trigger animation
        button.classList.add('animate');

        // Reset animation class to allow retriggering
        setTimeout(() => {
            button.classList.remove('animate');
        }, 500);

        // Change button color and store preference
        const newColor = button.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
        button.style.backgroundColor = newColor;
        localStorage.setItem('buttonColor', newColor);
    });
});
