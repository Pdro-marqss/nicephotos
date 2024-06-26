import { User } from '@prisma/client';
import { prisma } from 'src/prisma/client';

export class GetAllUsers {
   async execute(): Promise<User[]> {
      const users = await prisma.user.findMany({});

      return users;
   }
}