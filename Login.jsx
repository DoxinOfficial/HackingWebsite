import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    } else {
      alert("Enter valid credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[60vh]">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-6 rounded shadow-lg w-80">
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 bg-zinc-800 text-white border border-green-500 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 bg-zinc-800 text-white border border-green-500 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black py-2 rounded"
        >
          Enter Terminal
        </button>
      </form>
    </div>
  );
}
