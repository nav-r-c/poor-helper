import React, { useState } from 'react'
import BlogCard from './BlogCard'
import axios from "axios"

function Charity() {

	const [charities, setCharities] = useState([]);

	axios.get("http://localhost:5000/charity")
		.then( res => {
			setCharities(res.data)
		})
		.catch(err => console.log(err))

	const charitiesList = () => {
		return (
			charities.map(charity => {
				return <BlogCard cardTitle = {charity.companyName} cardDesc = {charity.description} />
			})
		)
	}

	return (
		<div>
			<h1 className='text-center font-bold text-[3rem] my-2'>Donate</h1>
			{charitiesList()}
		</div>
	)
}

export default Charity