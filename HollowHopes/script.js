document.addEventListener("DOMContentLoaded", () => {
    // Add slide-in after the page has loaded, but wait for a short time
    setTimeout(() => {
        document.body.classList.remove('initial-slide-in'); // Remove initial sliding in
    }, 50); // Delay the removal slightly to avoid immediate transition disappearance

    const prevLink = document.querySelector('.prev a');
    const nextLink = document.querySelector('.next a');
    
    // Next arrow click event
    nextLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link action initially to apply transition
        document.body.classList.add('slide-out-next'); // Slide out to the left
        setTimeout(() => {
            window.location.href = nextLink.href; // Allow navigation after transition
        }, 500); // Wait for the transition to finish (match duration)
    });

    // Previous arrow click event
    prevLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link action initially to apply transition
        document.body.classList.add('slide-out-prev'); // Slide out to the right
        setTimeout(() => {
            window.location.href = prevLink.href; // Allow navigation after transition
        }, 500); // Wait for the transition to finish (match duration)
    });
});