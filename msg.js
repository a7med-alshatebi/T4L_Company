document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  const spinner = document.getElementById('spinner');
  const formMessage = document.getElementById('formMessage');

  // Replace with your Google Apps Script URL
  const scriptURL = 'https://script.google.com/macros/s/AKfycbx5CGW5rnrwE2hmyJAl4emJ3bot20nsPWMNrseQrZm7Uiv5xXIlaSQYU8FGY70yhqPD/exec';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Set loading state
    submitBtn.disabled = true;
    submitText.textContent = 'Sending...';
    spinner.classList.remove('hidden');

    try {
      const formData = new FormData(form);
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.result === 'success') {
        showMessage('Message sent successfully!', 'bg-green-100', 'text-green-700');
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      showMessage('Error sending message. Please try again later.', 'bg-red-100', 'text-red-700');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      submitText.textContent = 'Send';
      spinner.classList.add('hidden');
    }
  });

  function showMessage(text, bgClass, textClass) {
    formMessage.textContent = text;
    formMessage.className = `${bgClass} ${textClass} text-center mt-4 p-3 rounded max-w-md mx-auto`;
    formMessage.classList.remove('hidden');
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.add('hidden');
    }, 5000);
  }
});