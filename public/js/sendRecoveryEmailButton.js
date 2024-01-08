async function sendRecoveryEmail(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    try {
        const response = await fetch('/api/emails/recovery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Error al enviar solicitud de recuperación de contraseña');
        }

        const data = await response.json();
        alert(data.message);
        window.location.href = '/login';
    } catch (error) {
        alert(error.message);
    }
}