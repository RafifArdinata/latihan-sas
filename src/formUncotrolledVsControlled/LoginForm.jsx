//!Tolong buatkan components login form di dalamnya terdapat input:
//*1.input type text:atribut name="username"
//*2.input type password: attribute name="password"
//*3.button dengan type submit
import React from 'react'

function LoginForm() {
     const handlerSubmit = (event) => {
      event.preventDefault();//? mencegah refresh halaman
      //!Tampilkan data username yang diketik dan disubmit di console log
      console.log(event.target.elements.username.value)
      console.log(event.target.elements.password.value)
    }
    
  return (
    <div>
        <form onSubmit={handlerSubmit}>
            <input 
            type="text" 
            name="username" 
            className='border-blue-200'/>
            <input 
            type="password" 
            name="password" 
            className='border-blue-200' />
            <button type='submit'>
                Login
            </button>
        </form>
    </div>
  )
}

export default LoginForm
//!form uncontrolled component
//! uncontrolled component adalah input yang nilainya dikontrol oleh DOM, bukan oleh react state. 
// Jadi, ketika kita mengubah nilai input, react tidak akan tahu perubahan itu. Kita bisa mengambil nilai input dengan menggunakan event.target.elements.namaInput.value.

//!tampilkan data username yang diketik dan disubmit di console log