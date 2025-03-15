import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex flex-col bg-zinc-800 justify-center items-center h-[calc(100vh-4rem)]">
      <h1 className="font-bold text-2xl text-white mb-10">
        Welcome to STUDY PLAN GENERATOR
      </h1>
      {isLoggedIn ? (
        <div className="font-bold text-2xl text-white mb-10">
          Nothing Here :3
        </div>
      ) : (
        <div className="flex flex-col bg-zinc-800 justify-center items-center w-full">
          <Link
            to="/login"
            className="text-white bg-zinc-700 p-2 text-center  w-1/5 lg:w-1/10 rounded-xl text-sm font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200 mb-10"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white bg-zinc-700 text-sm p-2 text-center w-1/5 lg:w-1/10 rounded-xl font-bold cursor-pointer sm:text-base lg:text-xl hover:underline hover:scale-105 transition-transform duration-200"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
