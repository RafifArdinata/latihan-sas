import react from 'react'
import Dasar from './usestate/Dasar';
import Praktik from './usestate/Praktik';
import PraktikTwo from './usestate/PraktikTwo';
import Basic from './useRef/Basic';
import LoginForm from './formUncotrolledVsControlled/LoginForm';
import loginFormWithUseReff from './formUncotrolledVsControlled/loginFormWithUseReff';
import LoginFormControlled from './formUncotrolledVsControlled/LoginFormControlled';
import Tugas from './formUncotrolledVsControlled/Tugas';
function AppUseState() {
  return (
    <div>
     {/* <Dasar /> */} 
      {/*<Praktik/> */}
      {/*<PraktikTwo/>*/}
      {/*} <Basic/>*/}
      {/*<LoginForm/>*/}
      {/*<loginFormWithUseReff/>*/}
      {/*<LoginFormControlled/>*/}
      <Tugas/>
    </div>
  );
}

export default AppUseState;

//!tolong setiap tombol diklik nilai bertambah 1