import React from "react";
import "./homepage.css";
import "../../App.css";

function Homepage() {
	return (
		<div className='hero'>
			<div className='hero-intro'>
				<h1>Rafael Castellanos-Welsh</h1>
				<h2>Frontend Web Developer | Graphic Design</h2>
				<h5>Current Project: Chingu Voyage 24</h5>
			</div>
			<div className='hero-links'>
				<ul>
					<li>
						<i className='fab fa-linkedin'></i>
					</li>
					<li>
						<i className='fab fa-github-square'></i>
					</li>
					<li>
						<i className='fas fa-envelope'></i>
					</li>
					<li></li>
				</ul>
			</div>
		</div>
	);
}

export default Homepage;
