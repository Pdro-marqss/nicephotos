import bcrypt from 'bcrypt';
import { prisma } from 'src/prisma/client';
import { LoginUserInterface } from 'src/modules/users/types';
import { AppError } from "src/errors/AppError";


export class Auth {
   async execute({ email, password }: LoginUserInterface) {
      const user = await prisma.user.findUnique({
         where: {
            email: email
         }
      });

      if (!user) {
         throw new AppError("User not exists!");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
         throw new AppError("Password incorrect!");
      }

      return true;
   }
}