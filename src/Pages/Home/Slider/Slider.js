import React, { useState, useEffect } from "react";
import computer1 from "../../../images/computer1.jpg";
import computer2 from "../../../images/computer2.jpg";
import computer3 from "../../../images/computer3.jpg";

const Slider = () => {
	const photos = [computer1, computer2, computer3];
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = photos.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index]);

	useEffect(() => {
		const slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<div className="relative transition-all">
			<img width="100%" className="" src={photos[index]} alt="" />
			<div className="w-full h-full bg-[#000000ab] absolute top-0 left-0 flex justify-center items-end">
				<div className="my-20">
					<h2 className="text-6xl text-slate-200">Custom Slider</h2>
				</div>
			</div>
		</div>
	);
};

export default Slider;
