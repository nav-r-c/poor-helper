import React, { useState } from 'react'
import axios from "axios"

function Register() {

	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState();
	const [password, setPassword] = useState("");
	const [type, setType] = useState("Male");
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		const user = {
			name : name,
			phoneNumber : phoneNumber,
			password : password,
			type : type,
			gender : gender,
			address : address
		}

		console.log(user);

		axios.post("http://localhost:5000/users/createUser", user)
			.then(res => console.log(res.data))

		setName("");
		setPhoneNumber();
		setPassword("");
		setType("Person");
		setGender("Male");
		setAddress("");

	}

	return (
		<div>
			<h1 className='text-center text-[3rem] font-bold'>Sign Up For A New Account</h1>
			<form onSubmit={onSubmit}>
				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Name:</label>
					<input type = "text" placeholder='Ramesh Suresh' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]' value = {name} onChange = {(e) => setName(e.target.value)}/>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Phone Number:</label>
					<input type = "number" placeholder='8824002056' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]' value = {phoneNumber} onChange = {(e) => setPhoneNumber(e.target.valueAsNumber)} />
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Password:</label>
					<input type = "password" placeholder='coolpassword1234' className='border-2 rounded-lg bg-white px-5 py-2 w-[60%]' value = {password} onChange = {(e) => setPassword(e.target.value)}/>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Type: </label>
					<select className='px-5 py-2 border-2 rounded-lg bg-white'>
						<option value = "Person" onChange={(e) => setType(e.target.value)}>Person</option>
						<option value = "Inspector" onChange={(e) => setType(e.target.value)}>Inspector</option>
						<option value = "Charity" onChange={(e) => setType(e.target.value)}>Charity</option>
						<option value = "Company" onChange={(e) => setType(e.target.value)}>Company</option>
					</select>
				</div>


				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Gender: </label>
					<select className='px-5 py-2 border-2 rounded-lg bg-white'>
						<option value = "Male" onChange={(e) => setType(e.target.value)}>Male</option>
						<option value = "Female" onChange={(e) => setType(e.target.value)}>Female</option>
						<option value = "Others" onChange={(e) => setType(e.target.value)}>Others</option>
						<option value = "Prefer Not To Say" onChange={(e) => setType(e.target.value)}>Prefer Not to say</option>
					</select>
				</div>

				<div className='container my-5'>
					<label className='text-[1.2rem] mx-5'>Address:</label>
					<textarea rows = {2} cols = {100} className = "border-2" value = {address} onChange = {(e) => setAddress(e.target.value)}></textarea>
				</div>

				<button type = "submit" className='border-2 rounded-lg px-10 py-2 mx-10'>Submit</button>

			</form>
		</div>
	)
}

export default Register