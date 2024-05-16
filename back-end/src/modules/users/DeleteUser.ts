import { prisma } from '../../prisma/client';
import { User } from "@prisma/client";
import { AppError } from 'src/errors/AppError';
import { DeleteUserInterface } from './types';

export class DeleteUser {
   async execute({ id }: DeleteUserInterface) {
      //verifica se ele existe
      const userExists = await prisma.user.findFirst({
         where: {
            id: id
         }
      });

      if (!userExists) {
         throw new AppError("User not exists!");
      }

      await prisma.user.delete({
         where: { id }
      })
   }
}