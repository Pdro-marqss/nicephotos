import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import LeftImage from '../../assets/left-image.jpg';
import TopImage from '../../assets/top-image.jpg';
import Logo from '../../assets/logo.png';

import './style.scss';

type FormValues = {
   email: string;
   password: string;
}

export function SignIn() {
   const { register, handleSubmit } = useForm<FormValues>();
   const navigate = useNavigate()

   function handleLogin(data: FormValues) {
      if (data.email !== '' && data.password !== '') {
         Login(data);
      } else {
         toast.error("Seus campos estão vazios")
      }
   }

   async function Login(data: FormValues) {
      try {
         const response = await axios.post('http://localhost:3333/users/login', { email: data.email, password: data.password });

         if (response.data) {
            toast.success("Login feito com sucesso :D");
            navigate('/admin');
         }

      } catch (error) {
         console.log('Erro ao fazer login: ', error);
         toast.error("Suas credencias estão incorretas");
         return false;
      }
   }

   return (
      <div className="signin-container">
         <picture>
            <source media='(max-width: 1190px)' srcSet={TopImage} />
            <img src={LeftImage} alt="" />
         </picture>

         <div className='signin-content'>
            <header className='signin-header'>
               <img src={Logo} alt="" />
               <h1>Bem-vindo a <span>Nicephotos!</span></h1>
               <p>Ainda não possui uma conta?<Link to="/signup"> Faça seu cadastro clicando aqui.</Link></p>
            </header>

            <form onSubmit={handleSubmit(handleLogin)} autoComplete='off'>
               <div className='input-container'>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" placeholder='Digite seu e-mail' {...register('email')} />
               </div>

               <div className='input-container'>
                  <label htmlFor="password">Senha</label>
                  <input type="password" placeholder='Digite sua senha' {...register('password')} />
               </div>

               <p>Esqueci minha senha</p>

               <button type='submit'>Fazer login</button>
            </form>
         </div>
      </div>
   )
}