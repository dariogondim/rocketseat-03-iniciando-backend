import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, _response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, token } = await authenticateUser.execute({
        email,
        password,
    });

    delete user.password;
});

export default sessionsRouter;
