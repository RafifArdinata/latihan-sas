import React, { useContext } from "react";
import UserContext from "./UserContext";

function ProfileDetail() {
  const name = useContext(UserContext);

  return (
    <>
      <div>Ini adalah ProfileDetail</div>
      <h1>Nama : {name}</h1>
      <button onClick={() => SetName("ali")}>Ubah Nama</button>
    </>
  );
}

export default ProfileDetail;
//!tolong ambil data dari variabel name yang berada di component home menggunakan useContext
