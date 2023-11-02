// JavaScript to control bubble popping animation after a few seconds
document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.bubble');

    bubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', function() {
            bubble.style.animation = 'bubbleFade 3s forwards';
        });
    });
});

