import { Request, Response } from 'express';
import { Auth } from './auth';

export class AuthController {
   async handle(req: Request, res: Response) {
      const { email, password } = req.body;

      const auth = new Auth();

      const result = await auth.execute({ email, password });

      return res.status(201).json(result);
   }
}
