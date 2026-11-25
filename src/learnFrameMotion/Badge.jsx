import React from 'react'

function Badge() {
  return (
    <div
    className='justify-center items-center flex h-screen'
    >
        <motion.span
        className="inline-block rounded-full"
        animate={{
            sclae:[1,1.05,1],
            boxShadow:[
                "0 0 0px rgba(209, 152, 0, 0",
                "0 0 20px rgba(209, 152, 0, 8",
                "0 0 0px rgba(209, 152, 0, 0",
            ]
        }}
        transition={{
            duration:1.5,
        }}
        >
            <span className='bg-purple-400 text-2xl px-5 py-2 rounded-full'>LIVE</span>

        </motion.span>
    </div>
  )
}

export default Badge