import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-slate-200 py-6">
			<div className="app-container mx-auto">
				<nav className="flex justify-between text-slate-800">
					<div className="logo">
						<h2 className="text-2xl font-semibold">LogIn System</h2>
					</div>
					<ul className="text-xl">
						<Link className="ml-8" to="/">
							Home
						</Link>
						<Link className="ml-8" to="/about">
							About
						</Link>
						<Link
							className="ml-8 px-6 pb-2 pt-1 hover:bg-slate-800 hover:text-white rounded-full border-slate-400 border-2"
							to="/login"
						>
							Login
						</Link>
						<Link
							className="ml-8 px-6 pb-2 pt-1 hover:bg-transparent hover:text-slate-800 bg-slate-800 text-white rounded-full border-slate-400 border-2"
							to="/sing-up"
						>
							Sign Up
						</Link>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
