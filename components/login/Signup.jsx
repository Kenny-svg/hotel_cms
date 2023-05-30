import React from 'react';

const Signup = () => {
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
                <h1 className='text-6xl font-bold text-white'>Sign up</h1>
            </div>
        </div>
        <div className="relative z-10 bg-yellow-500 w-full h-[450px] px-28 flex justify-center justify-items-center items-center">
            <div className=' justify-items-center'>
                <input type='name' placeholder='first name' className='py-2 px-8 rounded-md bg-black text-yellow-500' />
                <input type='name' placeholder='last name' className='mt-5 py-2 px-8 rounded-md bg-black text-yellow-500 flex justify-center' />
                <input type='email' placeholder='email address' className='mt-5 py-2 px-8 rounded-md bg-black text-yellow-500 flex justify-center' />
                <input type='password' placeholder='password' className='mt-5 py-2 px-8 rounded-md bg-black flex justify-center text-yellow-500' /><br />
                <button className='hover:bg-black hover:text-yellow-500 transition duration-400 py-2 px-8 rounded-md border-2 border-black text-black font-semibold mx-auto flex justify-center mt-5'>Sign up</button><br />
                <p className='text-center'>Yet to have an account?<span className='font-bold text-black mx-2'>Sign up</span></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
