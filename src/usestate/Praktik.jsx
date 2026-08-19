import { useState } from "react";

function Praktik() {
  const [angka, setAngka] = useState(0);

  // Fungsi untuk menambah nilai 1
  function tambahSatu() {
    setAngka(angka + 1);
  }

  // Fungsi baru untuk menambah nilai 2
  function tambahDua() {
    setAngka(angka + 2);
  }

  return (
    <>
      <h1>Nilai: {angka}</h1>
      <button onClick={tambahSatu}>+</button>
      <br />
      <button onClick={tambahDua}>+2</button>
      <br />
      <button onClick={()=> setAngka (angka +3)}>
        +tambah 3
      </button>
    </>
  );
}

export default Praktik;

//!Tolong setiap tombol diklik nambah 1

//!Tolong buat button baru kemudian setiap tombol di klik nilai bertambah 2

//!Tolong 
// buat button baru kemudian setiap tombol diklik,nilai bertambah 3 tetapi menggunakaninline function