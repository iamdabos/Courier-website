document.addEventListener('DOMContentLoaded', () => {
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');

    function generateTrackingID() {
        // Generate a unique identifier using current time and a random number
        const timestamp = Date.now(); // Current time in milliseconds
        const randomNumber = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
        return `TRACK-${timestamp}-${randomNumber}`;
    }
    
    console.log(generateTrackingID()); // Example output: TRACK-1636573894561-1234
    
    
    trackingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const trackingNumber = document.getElementById('tracking-number').value;
        
        // Simulate tracking result
        trackingResult.textContent = `Tracking result for ${trackingNumber}: Your package is on its way!
        Destination: 123 Main St, Springfield,
    weight: 2kg`;
    });
    
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simulate form submission
        alert(`Thank you, ${name}! We have received your message and will get back to you at ${email}.`);
        
        // Reset form fields
        contactForm.reset();
    });
});
