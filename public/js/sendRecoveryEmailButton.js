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
            throw new Error('<No se encontró el usuario>');
        }

        const data = await response.json();
        alert(data.message);
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    } catch (error) {
        alert(error.message);
    }
}