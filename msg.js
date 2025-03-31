// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
  
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
  
        try {
          const formData = new FormData(contactForm);
          const scriptURL = 'https://script.google.com/macros/s/AKfycbyxUSWrWHruO5dwgHpIZZf3Qf6bVKT6c6nAMAAad5BvduMRdo2pGxRGpAMyhKsXJjZ6/exec'; // Replace with your web app URL
          
          const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData
          });
  
          const result = await response.json();
          
          if (result.result === 'success') {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'bg-green-100 text-green-700 text-center mt-4 p-3 rounded max-w-md mx-auto';
            formMessage.classList.remove('hidden');
            contactForm.reset();
          } else {
            throw new Error(result.error || 'Failed to send message');
          }
        } catch (error) {
          console.error('Error:', error);
          formMessage.textContent = 'Error sending message. Please try again.';
          formMessage.className = 'bg-red-100 text-red-700 text-center mt-4 p-3 rounded max-w-md mx-auto';
          formMessage.classList.remove('hidden');
        } finally {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
          
          // Hide message after 5 seconds
          setTimeout(() => {
            formMessage.classList.add('hidden');
          }, 5000);
        }
      });
    }
  });