import { CreateUserInterface } from "./types";
import { prisma } from "../../prisma/client";
import { User } from "@prisma/client";
import { AppError } from "src/errors/AppError";

export class CreateUser {
   async execute({ email, name, password, birthdate, cel, checkbox }: CreateUserInterface): Promise<User> {
      // Verificar se o usuario existe
      const userAlreadyExists = await prisma.user.findUnique({
         where: {
            email: email
         }
      });

      if (userAlreadyExists) {
         throw new AppError("User Already exists!");
      }

      // Criar o usuário
      const user = await prisma.user.create({
         data: {
            name: name,
            email: email,
            password: password,
            birthdate: birthdate,
            cel: cel,
            checkbox: checkbox
         }
      });

      return user;
   }
}