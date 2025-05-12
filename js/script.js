// Validación del formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    
    // Validación al enviar
    form.addEventListener('submit', function(event) {
        // Validar contraseña (mínimo 6 caracteres)
        const password = document.getElementById('password');
        if (password.value.length < 6) {
            password.classList.add('is-invalid');
            event.preventDefault();
            event.stopPropagation();
        }
        
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.classList.add('was-validated');
    });
    
    // Validar contraseña en tiempo real
    document.getElementById('password').addEventListener('input', function() {
        if (this.value.length >= 6) {
            this.classList.remove('is-invalid');
        } else {
            this.classList.add('is-invalid');
        }
    });
    
    // Validar teléfono (opcional)
    document.getElementById('telefono').addEventListener('input', function() {
        const telefono = this.value.replace(/\D/g, '');
        this.value = telefono;
    });
});