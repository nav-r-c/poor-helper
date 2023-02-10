import React from 'react'

function Register() {
	return (
		<div>
			<h1 className='text-center text-[3rem] font-bold'>Sign Up For A New Account</h1>
			<form method = "post">
				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Name:</label>
					<input type = "text" placeholder='Ramesh Suresh' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]'/>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Phone Number:</label>
					<input type = "number" placeholder='8824002056' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]'/>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Password:</label>
					<input type = "password" placeholder='coolpassword1234' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]'/>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Gender: </label>
					<select className='px-5 py-2 border-2 rounded-lg bg-white'>
						<option>Male</option>
						<option>Female</option>
						<option>Others</option>
						<option>Prefer Not to say</option>
					</select>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Address:</label>
					<textarea rows = {2} cols = {100} className = "border-2"></textarea>
				</div>

				<button type = "submit" className='border-2 rounded-lg px-10 py-2 mx-10'>Submit</button>

			</form>
		</div>
	)
}

export default Register