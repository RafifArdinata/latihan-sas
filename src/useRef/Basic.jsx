import React, { useRef, useState } from 'react'

function Basic() {
  const inputRef = useRef();
  const [nama, setNama] = useState("");

  function tampilkanNama() {
    setNama(inputRef.current.value);
  }
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Input Nama</h1>
        
        <input 
          ref={inputRef} 
          placeholder="Ketik nama..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button 
          onClick={tampilkanNama}
          className="w-full bg-black-500 hover:bg-bla-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
        
        <h2 className="text-xl font-semibold text-gray-800 mt-6">Name : {nama}</h2>
      </div>
    </div>
  )
}

export default Basic
