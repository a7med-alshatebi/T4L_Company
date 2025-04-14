document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const responseElement = document.getElementById("formMessage");

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyxUSWrWHruO5dwgHpIZZf3Qf6bVKT6c6nAMAAad5BvduMRdo2pGxRGpAMyhKsXJjZ6/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.status === "success") {
      responseElement.textContent = "Message sent successfully!";
      responseElement.classList.add("text-green-500");
      form.reset();
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    responseElement.textContent = "An error occurred. Please try again.";
    responseElement.classList.add("text-red-500");
  }
});