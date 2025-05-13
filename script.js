(function() {
    const element = document.getElementById('targetElement');
    let clickCount = 0;

    // Initialize from localStorage
    const savedColor = localStorage.getItem('boxColor');
    if (savedColor) {
        element.style.backgroundColor = savedColor;
    }

    element.addEventListener('click', function() {
        // Trigger animation
        this.classList.add('animate-pulse');
        
        // Remove animation class after completion
        setTimeout(() => {
            this.classList.remove('animate-pulse');
        }, 600);

        // Color rotation logic
        const colors = ['#4a90e2', '#50c878', '#ff6b6b', '#ffd700'];
        const newColor = colors[clickCount % colors.length];
        this.style.backgroundColor = newColor;
        clickCount++;

        // Save to localStorage
        localStorage.setItem('boxColor', newColor);
    });
})();
