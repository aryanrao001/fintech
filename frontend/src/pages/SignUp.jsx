import { Eye, EyeClosed, } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { Link, Links,  } from 'react-router';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AllContext';
import axios from "axios"
import { toast } from 'react-toastify';

export default function SignUp() {
    const [pass, setPass] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const {backendUrl , setRole  } = useContext(AppContext);

    const handleSubmit = async(e) =>{

      e.preventDefault();

      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("phone", phone);
      formdata.append("password", password);


      try {
        const response = await axios.post(backendUrl+'/users',formdata, {
          headers:{
            'Content-Type': 'application/json',//
          }
        });
        if(response.data.success){
          toast.success(response.data.message);
          navigate('/');
        }
        console.log(response.data);
        // console.log(formdata)
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="flex min-h-screen ">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-4">
        <div className="w-full max-w-md">
          <Link to='/' ><span className="text-sm text-gray-500 mb-8 inline-block">&lt; Back to dashboard</span></Link>

          <h2 className="text-xl font-bold mb-2 text-gray-900">Sign UP </h2>
          <p className="text-gray-500 text-xl mb-6">Enter your details to sign Up</p>

          {/* <div className="flex gap-4 mb-6">
            <button className="flex-1 py-2 px-4 border rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 border-gray-300 hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
            <button className="flex-1 py-2 px-4 border rounded-lg flex items-center justify-center text-sm font-medium text-gray-700 border-gray-300 hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/303127/twitter-logo.svg" alt="X" className="w-5 h-5 mr-2" />

              Sign in with X
            </button>
          </div> */}

          {/* <div className="text-center text-xl mb-6 text-gray-400">Or</div> */}

          <form className="space-y-4" onSubmit={handleSubmit} >
            <div>
                <label className="block text-sm font-medium text-gray-700">Name<span className="text-red-500">*</span></label>
                <input

                type="text" 
                placeholder="Enter Your Name..." 
                onChange={(e)=>(setName(e.target.value))}
                value={name}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
              <input
              type="email" 
              placeholder="info@gmail.com" 
              onChange={(e)=>(setEmail(e.target.value))}
              value={email}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">phone<span className="text-red-500">*</span></label>
              <input
              type="text" 
              placeholder="Enter Your Phone...." 
              onChange={(e)=>(setPhone(e.target.value))}
              value={phone}
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password<span className="text-red-500">*</span></label>
              <div className="relative">
              <input
                type={setPass ? 'password' : 'text'}
                placeholder="Enter your password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* <input type={ setpass ? 'password' : 'text' } placeholder="Enter your password" className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /> */}
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"><Eye/></span>
              </div>

            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Keep me logged in</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-sm">Sign In</button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?<Link to='/login' > <span href="#" className="text-blue-600 hover:underline">Sign In</span> </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden md:flex w-1/2 bg-[#151c48] items-center justify-center">
        <div className="text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-xl">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 7h16v2H4zm0 7h10v2H4z" /></svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">TailAdmin</h2>
          <p className="text-sm text-gray-300">Free and Open-Source Tailwind CSS Admin<br />Dashboard Template</p>
        </div>
      </div>
    </div>
  );
}
