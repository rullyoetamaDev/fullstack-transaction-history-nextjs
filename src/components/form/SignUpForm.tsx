import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUpForm = () => {
  const router = useRouter();

  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    message: "",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //console.log("check - values : ", values);

    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        username: values.username,
        password: values.password,
      }),
    })
      .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
        console.log(json);
        if (json.user != null) {
          setValues({
            ...values,
            message: json.description,
          });
          setTimeout(() => {
            router.push("/sign-in");
          }, 3000);
        } else {
          setValues({
            ...values,
            message: json.description,
          });
        }
      });
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="bg-white shadow-md rounded px-8  pb-8 mb-4 top-0"
        onSubmit={handleSubmit}
      >
        <p className="text-3xl text-center">Flip test App</p>
        <p className="p-5 text-xs text-center">
          Already have an account?{" "}
          <span className="text-[#fd8165] cursor-pointer">
            <button onClick={() => signIn()}>Sign In</button>
          </span>
        </p>
        <p
          className={`${
            values.message !== "Success"
              ? "text-xs text-center text-red-500"
              : "text-xs text-center text-green-400"
          }`}
        >
          {values.message !== "" ? values.message : ""}
        </p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            required
            name="email"
            type="email"
            onChange={handleInput}
            placeholder="Email"
          />
        </div>

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
            required
            name="username"
            type="text"
            min={3}
            onChange={handleInput}
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            required
            name="password"
            type="password"
            onChange={handleInput}
            placeholder="Password"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            required
            name="confirmPassword"
            type="password"
            onChange={handleInput}
            placeholder="Confirm Password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-[#fd8165] hover:bg-[#dc6d54] text-white text-xs font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>

      <p className="text-center text-gray-500 text-xs bottom-0">
        &copy;2024 PT.Fliptech Lentera Inspirasi Pertiwi.
      </p>
    </div>
  );
};

export default SignUpForm;
