import react from 'react'
function Dasar() {
    let angka = 0;
    function tambah ()
{
    angka = angka + 1;
    console.log(angka); 
}  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>{angka}</h1>
        <button onClick={tambah} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
            Tambah
        </button>
    </div>
  );
}

export default Dasar;   