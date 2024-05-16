import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import axios from 'axios';

import './style.scss';

type usersList = {
   id: string;
   email: string;
   name: string;
   birthdate: string;
   cel: string;
   checkbox: boolean;
}


export function AdminPage() {
   const [usersData, setUsersData] = useState<usersList[]>();

   useEffect(() => {
      getUsers();
   }, [usersData]);

   async function getUsers() {
      try {
         const response = await axios.get('http://localhost:3333/users');

         console.log(response.data);

         setUsersData(response.data);
      } catch (error) {
         console.log(error);
      }
   }

   function handleDelete(id: string) {
      if (usersData) {
         DeleteUser(id);
      }
      // if (data.email !== '' && data.password !== '') {
      //    Login(data);
      // } else {
      //    toast.error("Seus campos estão vazios")
      // }
   }

   async function DeleteUser(id: string) {
      try {
         await axios.delete(`http://localhost:3333/users/${id}`);

         // if (response.data) {
         //    toast.success("Login feito com sucesso :D");
         //    navigate('/admin');
         // }

      } catch (error) {
         console.log('Erro ao deletar: ', error);
         // toast.error("Suas credencias estão incorretas");
         // return false;
      }
   }

   return (
      <div className="admin-page-container">
         <header>
            <img src={Logo} alt="" />
            <h1>Lista de usuarios cadastrados</h1>
         </header>

         <div className='users-list-container'>
            {usersData ? usersData.map((item) => (
               <div className='user-list-cell' key={item.id}>
                  <div className='user-list-infos'>
                     <p><span>id: </span>{item.id}</p>
                     <p><span>Nome: </span>{item.name}</p>
                     <p><span>Email: </span>{item.email}</p>
                     <p><span>Data de nascimento: </span>{item.birthdate}</p>
                     <p><span>Celular: </span>{item.cel}</p>
                     <p><span>Gostaria de receber ofertas por email: </span>{item.checkbox ? 'Sim' : 'Não'}</p>
                  </div>

                  <button onClick={() => handleDelete(item.id)}>Deletar usuario</button>

                  <div className='divider'></div>
               </div>
            )) : <p>carregando...</p>}
         </div>
      </div>
   );
}