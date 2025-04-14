const scriptURl ='https://script.google.com/macros/s/AKfycbx5CGW5rnrwE2hmyJAl4emJ3bot20nsPWMNrseQrZm7Uiv5xXIlaSQYU8FGY70yhqPD/exec';

const form = document.forms['contactForm'];
form.addEventListener('submit',  (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);
    fetch(scriptURl, {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Message sent successfully!");
        form.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error sending message. Please try again later.");
    });
}
);