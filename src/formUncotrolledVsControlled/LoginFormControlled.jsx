import React, {useState} from 'react'

function LoginFormControlled() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
  return (
    <div>
        <form onSubmit={handlerSubmit}>
            <input 
            type="text" 
            name="username" 
            className='border-blue-200'
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
                console.log(e.target.value)
            }}
            />
            <input 
            type="password" 
            name="password" 
            className='border-blue-200' 
            value={password}
            onChange={(kejadian) => setPassword(kejadian.target.value)}
            />
              <input 
            type="text" 
            name="phone" 
            className='border-blue-200' 
            value={phone}
           onChange={handlerPhone}
            />
            <button type='submit'>
                Login
            </button>
            <h2>{username}</h2>
            <h2>{password}</h2>
            <h2>{phone}</h2>
        </form>
    </div>
  )
}

export default LoginFormControlled
//!1.cari design login form di figma community
//!2. selicing design tersebut
//!3. buat component signup
//!4.didalamnya terdapat username,password dan button signup
//!5.setiap user mengetik username, tampilkan langsung di halaman ()
//!