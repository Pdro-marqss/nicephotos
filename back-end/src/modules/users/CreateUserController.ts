import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { CreateUser } from './CreateUser';

export class CreateUserController {
   async handle(req: Request, res: Response) {
      const { email, name, password, birthdate, cel, checkbox } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const createUser = new CreateUser();

      const result = await createUser.execute({ email, name, password: hashedPassword, birthdate, cel, checkbox });

      return res.status(201).json(result);
   }
}