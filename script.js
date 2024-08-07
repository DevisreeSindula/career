document.querySelectorAll('.hover-btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#007bff';
    });
});
