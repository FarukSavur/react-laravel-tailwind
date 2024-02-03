import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Index() {
    return (
        <>
            <Navbar />
            <main className='mt-20 p-5'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
