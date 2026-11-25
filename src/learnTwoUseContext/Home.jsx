import React, { useState } from "react";
import UserContext from "./UserContext";
import Profile from "./Profile";

function Home() {
  const [name, setName] = useState("Fulan");

  return (
    <>
      <h1>Ini adalah Home</h1>

      <UserContext.Provider value={{ name, setName }}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default Home;
//*pada component profiledetail ingin mengambil data 'name' dari component 'home' (dilarang menggunakan props)
