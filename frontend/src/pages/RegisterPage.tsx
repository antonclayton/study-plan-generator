import React, { useState } from "react";

const registerPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error("Register failed:", error);
    }
  };
  return (
    <div className="flex flex-col bg-zinc-800 justify-center items-center h-[calc(100vh-4rem)]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-3/5 h-1/2 bg-zinc-500 justify-center items-center rounded-2xl border-white border-2 p-20"
      >
        <h1 className="text-white text-xl font-bold mb-4">Please Register!</h1>
        <input
          className=" bg-white p-2 m-4 w-1/2 rounded-2xl border-white border-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className=" bg-white p-2 m-4 w-1/2 rounded-2xl border-white border-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-800 text-white font-bold text-xl cursor-pointer p-2 m-4 w-1/4 rounded-2xl border-white border-2 hover:scale-101 transition-transform duration-200"
        >
          Register
        </button>
      </form>
      <h1 className="bg-zinc-800 text-white p-2 m-4 rounded-2xl border-white border-2">
        Work in Progress!
      </h1>
    </div>
  );
};

export default registerPage;
