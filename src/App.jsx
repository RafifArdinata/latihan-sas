//buatkan function Halo, isinya <h1> Halo dunia </h1>✅
//*panggil function hello 3x pada function app tinggal tambahin   <Halo /> 3x✅
//!buatlah nama function,masing-masing diberi navbar dan footer
import { Navbar as Kepala } from "./components/Navbar";
import Hero from "./components/Hero";
import { Card } from "./components/Card";
import { Footer as Kaki, Detail } from "./components/Footer";
import profilpengguna from "./components/ProfilPengguna";
//! custom nama : import {footer as kaki, Detail}
//! custom nama : import {Navbar as kepala}

function App() {
  return (
    <div>
      <Kepala />
      <Hero />
      <Card />
      <Card />
      <Card />
      <Kaki />
      <Detail />
      <element />
      <profilpengguna
      name='rafif'
      role='student'
      />
    
    </div>
  );
}

export default App;
//tolong buatkan components card dengan file card.jsx
//isinya menamoilkan nama laptop dan harga laptop, misal <h1> Pavilion 15 </h1> dan <h2> Rp. 10.000.000 </h2>