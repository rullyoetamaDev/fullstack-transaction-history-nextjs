import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {}
const SignInForm:NextPage = (props):JSX.Element => {
  const router = useRouter()
  const initialState = {
    username: "",
    message : ""
  };

  const [values, setValues] = useState(initialState);

  const handleInput = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin:React.FormEventHandler<HTMLFormElement> = async (e) => {
    // alert("halloooo")
    e.preventDefault()
    const res = await signIn('credentials',{
      username : values.username,
      redirect : false
    })

    if(res?.error){
        setValues({
        ...values,
        message : "username is invalid"
      })
      console.log(res.error)
    }else{
     
      router.push("/transaction")
      router.refresh();
    }

    // if(res?.ok){
    //   router.push("/transaction")
    // }else{
    //   setValues({
    //     ...values,
    //     message : "username is invalid"
    //   })
    // }

    setTimeout(() => {
      setValues({
        ...values,
        message : ""
      })
    }, 2000);

    //console.log("check - res : ",res)
  }
  
  return (
    <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 top-0" onSubmit={handleLogin}>
          <p className="text-3xl text-center">Flip test App</p>
          <p className="pt-5 text-xs text-center">
            do not have account?{" "}
            <span className="text-[#fd8165] cursor-pointer"><Link href={"/sign-up"}>Register here.</Link></span>
          </p>
          <p className='text-center text-xs py-3 text-red-600'>{values.message != "" ? values.message : ''}</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name='username'
              type="text"
              onChange={handleInput}
              placeholder="Username"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-[#fd8165] hover:bg-[#dc6d54] text-white text-xs font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              // onClick={() => signIn()}
            >
              Log In
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 text-xs bottom-0">
          &copy;2024 PT.Fliptech Lentera Inspirasi Pertiwi.
        </p>
      </div>
  )
}

export default SignInForm