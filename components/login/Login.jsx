import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/slices/authSlice';
import { useRouter } from 'next/router';

const Login = () => {
  const initialState = {
    name: '',
    password: ''
  };
  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login(values));
    router.push('/');
  };
  return (
    <div
      className="flex items-center justify-center h-screen relative"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/young-friends-looking-retro-photos-front-van_23-2148653407.jpg?t=st=1684959517~exp=1684960117~hmac=3531798450ab992cb1748c4009b8cd1dfafa59e632b6708685aad513aedd1471')" }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="flex-col flex md:flex-row items-center justify-items-center">
        <div className="relative z-10 bg-black/80 rounded-md w-full h-[500px] px-28 justify-center shadow-xl items-center flex">
            <div>
                <h4 className='text-center font-semibold italic text-yellow-500'>kandb</h4>
                <h1 className='text-6xl font-bold text-white'>Login</h1>
            </div>
        </div>
        <div className="relative z-10 bg-yellow-500 w-full h-[400px] px-28 flex justify-center justify-items-center items-center">
            <div className=' justify-items-center'>
                <input 
                    type='text' 
                    name='name'
                    placeholder='username'
                    value={values.name}
                    onChange={onChange} className='py-2 px-8 rounded-md bg-black text-yellow-500' 
                />
                <input 
                    type='password' 
                    placeholder='password'
                    value={values.password}
                    name='password'
                    onChange={onChange} className='mt-5 py-2 px-8 rounded-md bg-black flex justify-center text-yellow-500' /><br />
                <button onClick={handleLogin} className='hover:bg-black hover:text-yellow-500 transition duration-400 py-2 px-8 rounded-md border-2 border-black text-black font-semibold mx-auto flex justify-center mt-5'>Login</button><br />
                <p className='text-center'>Yet to have an account?<span className='font-bold text-black mx-2'>Sign up</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
