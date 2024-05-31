import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-regal-blue text-white h-16 flex justify-between items-center' >
            <Link to='/' className='w-1/5 flex justify-center  text-2xl cursor-pointer'>LandGrow</Link>
            <ul className='list-none flex justify-evenly w-1/5'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/properties'>Properties</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar