import React from 'react';
import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <div>
        <nav className='flex items-center justify-between bg-[#F5F5F5] py-2'>
            <div className='flex'>
                <Link to = "/"><h1 className='text-[2rem] px-5'>{props.appTitle}</h1></Link>
                <ul className='flex items-center mx-2 text-[1rem]'>
                    <li className='mx-2'><Link to = "/">Home</Link></li>
                    <li className='mx-2'><Link to = "/jobs">Jobs</Link></li>
                    <li className='mx-2'><Link to = "/charity">Charity</Link></li>
                    <li className='mx-2'><Link to = "/insurance">Government Policies</Link></li>
                </ul>
            </div>

            <div className='flex text-[1.2em]'>
                <p className='px-2'><Link to = "/login">Login</Link></p>
                <p> | </p>
                <p className='px-2'><Link to = "/register">Register</Link></p>
            </div>
            
        </nav>
    </div>
  )
}

Navbar.defaultProps = {
    appTitle : "App Title"
}

export default Navbar