import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="h-full absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-20 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg p-4 my-4 w-full bg-gray-700"
        />
        <button className="rounded-lg p-4 my-6 bg-red-700 w-full">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
