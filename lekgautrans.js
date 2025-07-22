<script>
  document.addEventListener("DOMContentLoaded", () => {
    const phoneLinks = document.querySelectorAll("a.phone");
    phoneLinks.forEach(link => {
      link.href = "tel:" + link.textContent.trim().replace(/\s+/g, "");
    });

    const emailLinks = document.querySelectorAll("a.email");
    emailLinks.forEach(link => {
      link.href = "mailto:" + link.textContent.trim();
    });

    emailjs.init('9njx40oBNk0gm9Nvz');

    const form = document.getElementById("quote-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const phonePattern = /^0[6-8][0-9]{8}$/;
      if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit South African phone number.");
        return;
      }

      if (!name || !email || !message) {
        alert("Please fill in all fields correctly.");
        return;
      }
      emailjs.sendForm('service_9dmwkqg', 'template_walmoor', form)//emailme
        .then(() => {
          return emailjs.sendForm('service_9dmwkqg', 'template_gguqemc', form);//autoReply
        })
        .then(() => {
          alert("Thank you, " + name + "! Your enquiry has been received.");
          form.reset();
        })
        .catch((err) => {
          console.error("Email sending failed:", err);
          alert("Something went wrong while sending your enquiry. Please try again later.");
        });
    });
  });
</script>
