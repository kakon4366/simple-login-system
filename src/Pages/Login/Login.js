import React from "react";
import "./Login.css";
import google from "../../images/google.png";
import github from "../../images/github.png";

const Login = () => {
	return (
		<div className="app-container mx-auto flex justify-center items-center">
			<div className="my-20 border p-6 w-[500px] ">
				<form action="">
					<h2 className="text-3xl text-center mb-2">Login</h2>
					<hr />
					<div className="flex flex-col mt-6">
						<label className="text-xl" htmlFor="email">
							Email Address
						</label>
						<input
							className="py-2 px-2 text-lg border-2 rounded"
							type="email"
							placeholder="Email Address"
						/>
					</div>
					<div className="flex flex-col mt-4">
						<label className="text-xl" htmlFor="password">
							Password
						</label>
						<input
							className="py-2 px-2 text-lg border-2 rounded"
							type="password"
							placeholder="Password"
						/>
					</div>
					<button className="bg-slate-600 hover:bg-slate-800 hover:transition-all w-full py-3 mt-6 rounded text-white text-lg">
						Login
					</button>
					<div className="relative">
						<div className="separetor p-2 bg-white flex justify-center items-center">
							<span className="bg-white px-3 relative z-10">or</span>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<button className="border-2 border-slate-800 hover:bg-slate-800 hover:transition-all w-full py-3 mt-6 rounded hover:text-white text-lg flex justify-center">
							<img className="w-8 mr-3" src={google} alt="" />
							Login with google
						</button>
						<button className="border-2 border-slate-800 hover:bg-slate-800 hover:transition-all w-full py-3 mt-6 rounded hover:text-white text-lg flex justify-center">
							<img className="w-8 mr-3" src={github} alt="" />
							Login with Github
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
