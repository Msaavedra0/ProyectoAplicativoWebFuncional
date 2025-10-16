document.addEventListener("DOMContentLoaded", () => {
  console.log("Página cargada y lista 🚀");

  const form = document.querySelector(".subscribe-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      alert("¡Gracias por suscribirte!");
    });
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert("✅ Tu mensaje fue enviado con éxito. Pronto nos pondremos en contacto contigo.");
      this.reset();
    }); 
