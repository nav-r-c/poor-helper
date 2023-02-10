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
		<div>
			<Navbar />
			<Router>
				<Routes>
					<Route path = "/" element = {<Home />} />
					<Route path = "/jobs" element = {<Jobs />} />
					<Route path = "/charity" element = {<Charity />} />
					<Route path = "/insurance" element = {<Insurance />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App