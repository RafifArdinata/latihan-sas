import React, { useState } from 'react';

function Tugas() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="max-w-[350px] mx-auto my-12 p-5 rounded-lg shadow-md bg-white font-sans">
      <h3 className="text-center mt-0 font-bold text-lg">Sign Up</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-[15px]">
          <label className="block mb-[5px]">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
            className="w-full p-[8px] box-border rounded border border-gray-300"
          />
        </div>

        <div className="mb-[15px]">
          <label className="block mb-[5px]">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            className="w-full p-[8px] box-border rounded border border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full p-[10px] bg-[green] hover:bg-[green] text-white border-none rounded cursor-pointer transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Tugas;