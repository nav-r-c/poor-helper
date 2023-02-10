import React from 'react'

function Login() {
  return (
    <div>
        <h1 className='text-center text-[3rem] font-bold'>Login</h1>
        <form method = "get">
            <div className='container my-5'>
                <label className='text-[1.2rem] mx-5'>Phone Number:</label>
                <input type = "number" placeholder='8824002056' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]'/>
            </div>

            <div className='container my-5'>
                <label className='text-[1.2rem] mx-5'>Password:</label>
                <input type = "password" placeholder='coolpassword1234' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]'/>
            </div>

            <button type = "submit" className='border-2 rounded-lg px-10 py-2 mx-10'>Submit</button>

        </form>
    </div>
  )
}

export default Login