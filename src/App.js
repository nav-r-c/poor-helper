import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Jobs from './components/Jobs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"
import Charity from './components/Charity';
import Insurance from './components/Insurance';
import Register from './components/Register';
import Login from './components/Login';

function App() {
	return (
		<Router>
		<div>
			<Navbar appTitle = "Poor Helper" />
				<Routes>
					<Route path = "/" element = {<Home />} />
					<Route path = "/jobs" element = {<Jobs />} />
					<Route path = "/charity" element = {<Charity />} />
					<Route path = "/insurance" element = {<Insurance />} />
					<Route path = "/login" element = {<Login />} />
					<Route path = "/register" element = {<Register />} />
				</Routes>
		</div>
		</Router>

	)
}

export default App