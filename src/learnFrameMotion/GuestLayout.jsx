import React from 'react'
import {NavLink,Outlet} from 'react-router'

function GuestLayout() {
    return (
        <div>
            <nav className='space x-1'>
                <NavLink to="/">
                Home
                </NavLink>
                <NavLink to="/" about>
                About
                </NavLink>
            </nav>
            <main className='mt-4'>
                <div>
                <AnimatePresence mode="wait" >
                    <motion.div>
                        key={location.pathname}
                        initial={{opacity: 0, x:50}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0, x:-50}}
                        transition={{duration: 0.35, ease: "easeOut"}}
                    </motion.div>
                </AnimatePresence>
                    <outlet/>
                </div>
            </main>
        </div>
    )
}