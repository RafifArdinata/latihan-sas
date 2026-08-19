import React from 'react'

function PraktikTwo() {
    const [name, setName] = useState("Rafif")

    function changeName() {
        setName("Fulan")//?update menjadi fulan
    }
  return (
    <>
     <div>{Name}</div>
     <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default PraktikTwo

//! ketika button di click, mengubah nama ali menjadi fulan