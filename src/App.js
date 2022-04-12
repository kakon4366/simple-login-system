import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
			</Routes>
		</>
	);
}

export default App;
