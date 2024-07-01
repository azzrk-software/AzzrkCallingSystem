import { useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import loginBg from '../assets/images/loginBg.png';
import closeCircle from '../assets/images/close-circle.png';
import LoadingButton from '../components/LoadingButton';

export default function Login() {
  const [error, setError] = useState(false);
  const [usernameRequired, setUsernameRequired] = useState(false);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username && !password) {
      setUsernameRequired(true);
      setPasswordRequired(true);
      setError('');
      return;
    } else if (!username) {
      setUsernameRequired(true);
      setError('');
      return;
    } else if (!password) {
      setPasswordRequired(true);
      setError('');
      return;
    }

    setIsLoading(true);

    const response = await fetch('https://admin.loop.azzrk.com/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('user', data?.access);
      localStorage.setItem('userRole', data?.user?.role);

      navigate('/calling');

      setIsLoading(false);
    } else if (response.status === 401) {
      // Handle errors
      setError('Username or password is not correct');
      setUsernameRequired(false);
      setPasswordRequired(false);
      setIsLoading(false);
    } else if (response.status === 500) {
      // Handle errors
      setError('Something went wrong. please try again');
      setUsernameRequired(false);
      setPasswordRequired(false);
      setIsLoading(false);
    }
  }

  return (
    <main className="flex items-center max-sm:flex-col max-sm:h-screen max-sm:gap-4">
      <div className="w-[50%] h-screen max-sm:w-full max-sm:h-[35%] max-sm:rounded-br-[20px] max-sm:rounded-bl-[20px]">
        <img src={loginBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-[50%] h-screen flex flex-col justify-center items-center max-sm:w-full max-sm:h-[50%] max-sm:grow">
        <div className="w-[80%] m-auto flex flex-col h-[50%] max-sm:h-[100%] max-sm:justify-start max-sm:w-[90%]">
          <div className="lg:mb-[50px] max-sm:text-center max-sm:mb-[100px]">
            <h1 className="text-[36px] font-[600]">Welcome Back!</h1>
            <p className="text-gray-500">Please enter your details</p>
          </div>

          <div
            className={`text-[#B00101] text-center mb-[50px] font-[400] text-[20px] max-sm:text-[18px] transition-all ease-in-out ${
              error ? 'opacity-1 visible' : 'opacity-0 invisible'
            }`}
          >
            {error}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-y-8"
          >
            <div className="flex flex-col gap-y-2">
              <label className="font-[500] flex gap-1" htmlFor="username">
                Username <FaStarOfLife className="w-2 text-[#B00101]" />
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                id="username"
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  usernameRequired ? 'border-red-500' : ''
                }`}
              />

              <p
                className={`text-gray-500 flex items-center gap-1 ${
                  usernameRequired
                    ? 'opacity-1 visible text-[#b00101]'
                    : 'opacity-0 invisible'
                }`}
              >
                <span>
                  <img src={closeCircle} />
                </span>
                Required
              </p>
            </div>

            <div className="flex flex-col gap-y-2">
              <label className="font-[500] flex gap-1" htmlFor="password">
                Password <FaStarOfLife className="w-2 text-[#B00101]" />
              </label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                  passwordRequired ? 'border-red-500' : ''
                }`}
              />

              <p
                className={`text-gray-500 flex items-center gap-1  ${
                  passwordRequired
                    ? 'opacity-1 visible text-[#b00101]'
                    : 'opacity-0 invisible'
                }`}
              >
                <span>
                  <img src={closeCircle} />
                </span>
                Required
              </p>
            </div>

            <button
              type="submit"
              className="flex justify-center items-center bg-[#00092A] text-white mt-6 p-2 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? <LoadingButton /> : 'login'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
