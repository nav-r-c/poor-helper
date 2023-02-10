import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jobs from './components/Jobs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import Charity from './components/Charity';
import Insurance from './components/Insurance';

function App() {
	return (
		<Router>
		<div>
			<Navbar />
				<Routes>
					<Route path = "/" element = {<Home />} />
					<Route path = "/jobs" element = {<Jobs />} />
					<Route path = "/charity" element = {<Charity />} />
					<Route path = "/insurance" element = {<Insurance />} />
				</Routes>
		</div>
		</Router>

	)
}

export default App