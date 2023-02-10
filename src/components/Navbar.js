import React from 'react';

function Navbar(props) {
  return (
    <div>
        <nav className='flex justify-between bg-[#F5F5F5] py-2'>
            <div className='flex'>
                <a href = "/"><h1 className='text-[2rem] px-5'>{props.appTitle}</h1></a>
                <ul className='flex items-center mx-2 text-[1rem]'>
                    <li className='mx-2'><a href = "/">Home</a></li>
                    <li className='mx-2'><a href = "/">Jobs</a></li>
                    <li className='mx-2'><a href = "/">Charity</a></li>
                    <li className='mx-2'><a href = "/">Insure Policies</a></li>
                </ul>
            </div>
            
        </nav>
    </div>
  )
}

Navbar.defaultProps = {
    appTitle : "App Title"
}

export default Navbar