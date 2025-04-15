document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevenir envío real del formulario
  
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
  
      if (!nombre || !correo || !mensaje) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
      }
  
      // Aquí podrías agregar lógica para enviar datos a un servidor
  
      alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
      form.reset(); // Limpia el formulario
    });
  });
  