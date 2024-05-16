import { Request, Response } from 'express';
import { DeleteUser } from './DeleteUser';

export class DeleteUserController {
   async handle(req: Request, res: Response) {
      const { id } = req.params;

      const deleteUser = new DeleteUser();

      try {
         await deleteUser.execute({ id });
         return res.status(200).json({ message: 'User deleted' });
      } catch (error) {
         console.log('Erro ao excluir usuario', error);
         return res.status(500).json({ message: 'Cant delete user' });
      }
   }
}