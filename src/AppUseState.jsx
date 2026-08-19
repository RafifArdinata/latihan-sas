import react from 'react'
import Dasar from './usestate/Dasar';
import Praktik from './usestate/Praktik';
import PraktikTwo from './usestate/PraktikTwo';
import Basic from './useRef/Basic';
function AppUseState() {
  return (
    <div>
      <Dasar />
      <Praktik/>
      <PraktikTwo/>
      <Basic/>
    </div>
  );
}

export default AppUseState;

//!tolong setiap tombol diklik nilai bertambah 1