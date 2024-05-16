import LeftImage from '../../assets/left-image.jpg';
import Logo from '../../assets/logo.png';

import './style.scss';

export function SignUp() {
   return (
      <div className="signup-container">
         <img src={LeftImage} alt="" />

         <div className='signup-content'>
            <header className='signup-header'>
               <img src={Logo} alt="" />
               <h1>Bem-vindo a <span>Nicephotos!</span></h1>
               <p>Já possui uma conta?<span> Faça o login clicando aqui.</span></p>
            </header>

            {/* vira component depois */}
            <form>
               <div className='input-container'>
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="name" id="name" placeholder='Digite seu nome' required />
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="email">E-mail</label>
                     <input type="email" name="email" id="email" placeholder='Digite seu e-mail' required />
                  </div>
                  <div className='input-container'>
                     <label htmlFor="email-confirm">Confirmar E-mail</label>
                     <input type="email" name="email-confirm" id="email-confirm" placeholder='Confirme seu e-mail' required />
                  </div>
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="password">Senha</label>
                     <input type="password" name="password" id="password" placeholder='Digite sua senha' required />
                  </div>
                  <div className='input-container'>
                     <label htmlFor="birth-date">Data de nascimento</label>
                     <input type="date" name="birth-date" id="birth-date" required />
                  </div>
               </div>

               <div className='form-column'>
                  <div className='input-container'>
                     <label htmlFor="cel">Celular</label>
                     <input type="tel" name="cel" id="cel" placeholder='Celular' required />
                  </div>
                  <div className='fake-cell'></div>
               </div>

               <div className='checkbox-container'>
                  <input type="checkbox" name="checkbox" id="checkbox" />
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