import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import LeftImage from '../../assets/left-image.jpg';
import TopImage from '../../assets/top-image.jpg';
import Logo from '../../assets/logo.png';

import './style.scss';

type FormValues = {
   name: string;
   email: string;
   emailConfirm: string;
   password: string;
   birthDate: Date;
   cel: number;
   checkbox: boolean;
}

export function SignUp() {
   const { register, handleSubmit } = useForm<FormValues>();

   function handleSignUp(data: FormValues) {
      console.log(data);
   }

   return (
      <div className="signup-container">
         {/* <img src={LeftImage} alt="" /> */}
         <picture>
            <source media='(max-width: 1190px)' srcSet={TopImage} />
            <img src={LeftImage} alt="" />
         </picture>

         <div className='signup-content'>
            <header className='signup-header'>
               <img src={Logo} alt="" />
               <h1>Bem-vindo a <span>Nicephotos!</span></h1>
               <p>Já possui uma conta?<Link to="/signin"> Faça o login clicando aqui.</Link></p>
            </header>

            {/* vira component depois */}
            <form onSubmit={handleSubmit(handleSignUp)} autoComplete='off'>
               <div className='input-container'>
                  <label htmlFor="name">Nome</label>
                  <input type="text" placeholder='Digite seu nome' {...register('name')} />
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="email">E-mail</label>
                     <input type="email" placeholder='Digite seu e-mail' {...register('email')} />
                  </div>
                  <div className='input-container'>
                     <label htmlFor="emailConfirm">Confirmar E-mail</label>
                     <input type="email" placeholder='Confirme seu e-mail' {...register('emailConfirm')} />
                  </div>
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="password">Senha</label>
                     <input type="password" placeholder='Digite sua senha' {...register('password')} />
                  </div>
                  <div className='input-container'>
                     <label htmlFor="birthDate">Data de nascimento</label>
                     <input type="date" {...register('birthDate')} />
                  </div>
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="cel">Celular</label>
                     <input type="number" placeholder='Celular' {...register('cel')} />
                  </div>
                  <div className='fake-cell'></div>
               </div>

               <div className='checkbox-container'>
                  <input type="checkbox" {...register('checkbox')} />
                  <label htmlFor="checkbox">Quero receber ofertas por email</label>
               </div>

               <button type='submit'>Finalizar Cadastro</button>
            </form>

            <footer>
               <p>Seus dados pessoais serão respeitados de acordo com a nossa <span>Política de Privacidade</span>. Ao prosseguir com o cadastro você concorda com a política e os <span>Termos de Serviço</span>.</p>
            </footer>
         </div>


      </div>
   )
} 