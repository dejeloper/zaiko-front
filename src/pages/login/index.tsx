import Image from 'next/image';
import Link from 'next/link';
import welcomeImage from '../../images/welcome.svg';
import { Logo } from '@/components/Logo';
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { useState } from 'react';

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);

  const togglePassword = () => {
    const passwordInput: HTMLInputElement | null = document.querySelector('#password');
    if (passwordInput) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        setIsPassword(false);
      } else {
        passwordInput.type = "password";
        setIsPassword(true);
      }
    }
  }

  return (
    <div className='flex flex-col sm:flex-row h-screen'>
      <div className="sm:w-1/2 bg-secundary text-white ">
        <section className=" bg-white">
          <Logo size='200' />
        </section>
        <section className="login mt-10 px-8">
          <h2 className='py-3 text-center text-4xl text-title font-display font-semibold'>
            Bienvenido a Zaiko
          </h2>
          <div className="formulario text-black">
            <div className=" first-letter:flex flex-col justify-center items-center">
              <div className="p-10 rounded-lg shadow-md">
                <div className="flex flex-col w-full gap-4">
                  <div className="userText">
                    <input type="text" id="user" name="user" className="border-gray-300 border-2 py-2 px-4 rounded-md w-full" placeholder='Usuario' required />
                  </div>
                  <div className="passText relative">
                    <input type="password" id="password" name="password" className="border-gray-300 border-2 py-2 px-4 rounded-md w-full" placeholder='Contraseña' required />
                    <button type="button" className="absolute right-0 top-0 mt-2 mr-2" onClick={() => togglePassword()}>
                      {
                        !isPassword ? (
                          <RiEye2Line fontSize={24} />
                        ) : (
                          <RiEyeCloseLine fontSize={24} />
                        )
                      }
                    </button>
                  </div>
                  <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary_hover transition-colors duration-300">Iniciar sesión</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hidden sm:w-1/2 sm:flex items-center justify-center bg-indigo-400">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <Image src={welcomeImage} alt='Welcome Photo' width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Login;