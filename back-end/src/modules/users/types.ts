export interface CreateUserInterface {
   email: string;
   name: string;
   password: string;
   birthdate: string;
   cel: string;
   checkbox: boolean;
}

export interface LoginUserInterface {
   email: string;
   password: string;
}

export interface DeleteUserInterface {
   id: string;
}