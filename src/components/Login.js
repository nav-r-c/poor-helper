import React, { useState } from 'react';
import axios from "axios";

function Login() {

	const [phoneNumber, setPhoneNumber] = useState();
	const [password, setPassword] = useState("");

	
	let onSubmit = (e) => {

		e.preventDefault();
		axios.get("http://localhost:5000/users")
		.then(users => {

			let arr = users.data;
			// console.log(arr);
			for (let i = 0; i < arr.length; i++)
			{
				// console.log(arr[i].phoneNumber);
				// console.log(arr[i].password);
				// console.log(parseInt(phoneNumber));
				// console.log(password);
				// console.log();
				if (arr[i].phoneNumber === parseInt(phoneNumber) && arr[i].password === password) {
					console.log(arr[i]);
					return;
				}
			}

			alert("No Such User Found!");
			})

		
	}
	

	


	return (
		<div>
			<h1 className='text-center text-[3rem] font-bold'>Login</h1>
			<form onSubmit={onSubmit}>
				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Phone Number:</label>
					<input type = "number" placeholder='8824002056' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]' value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.value)} />
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Password:</label>
					<input type = "password" placeholder='coolpassword1234' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
				</div>

				<button type = "submit" className='border-2 rounded-lg px-10 py-2 mx-10'>Submit</button>

			</form>
		</div>
	)
}


export default Login