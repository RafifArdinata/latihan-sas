import React from 'react'

function LoginFormWithUseReff() {
    const usernameRef = useRef();
     const handlerSubmit = (event) => {
      event.preventDefault();//? mencegah refresh halamang
      console.log(usernameRef.current.value)
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

export default LoginFormWithUseReff

//!form Uncontrolled component with useRef