import React, {useState} from 'react'
import Card from './Card'
import axios from "axios"

function Jobs() {

	const [jobs, setJobs] = useState([]);

	axios.get("http://localhost:5000/jobs/")
		.then(res => {
			setJobs(res.data)
		})
		.catch(err => console.log(err))

	const jobsList = () => {
		return jobs.map( job => {
			return <Card cardTitle = {job.title} cardInfo = {job.description} />
		})
	}


	return (
		<div className='flex justify-center w-[75%] mx-auto'>
			{jobsList()}
			{console.log(jobs)}
		</div>
	)
}

export default Jobs