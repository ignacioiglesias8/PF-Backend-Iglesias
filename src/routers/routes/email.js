import { Router } from 'express';
import { sendRecoveryPasswordEmail } from '../../functions/sendEmail.js';
import UserController from '../../controllers/UserController.js';

const router = Router();
const userController = new UserController();

router.post('/recovery', async (req, res) => {
    try {
        const { email } = req.body;

        // Agrega un console.log para imprimir el email en la consola del servidor
        console.log('Email ingresado:', email);

        // Resto de tu lógica de recuperación de contraseña aquí...

        // Envía una respuesta al cliente
        res.send('Recuperación de contraseña iniciada. Verifica la consola del servidor para el email ingresado.');
    } catch (error) {
        // Manejo de errores
        req.logger.error(error.message, email);
        res.status(500).send('Error en la recuperación de contraseña.');
    }
});

export default router;