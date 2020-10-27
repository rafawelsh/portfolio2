import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
	max-height: 100%;
	width: 90%;
	margin: 0 auto;
	background-color: var(--baseColor);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.quick-bio,
	.technologies,
	.personal-side {
		width: 100%;
		padding: 1rem 0;
	}
	.personal-side{
		margin-bottom: 2rem;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style-type: none;
	}

	li {
		padding: 0.5em 1em;
	}

	@media only screen and (max-width: 850px) {
		height: 100%;
	}
	
	// media queries for mobile landscape
	@media only screen and (min-device-width: 320px) and (max-device-width: 720px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
		h2 {
			font-size: 2em;
		}
		h6 {
			font-size: 0.75em;
		}
		a {
			font-size: 2em;
		}
	}
	// @media only screen and (max-device-width: 850px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait) {
	// 	height: 100vh;
	// 	h2 {
	// 		font-size: 2em;
	// 	}
	// 	h6 {
	// 		font-size: 0.75em;
	// 	}
	// }
`;

function About() {
	return (
		<StyledAbout className='about'>
			<h2>A little about myself</h2>
			<div className='quick-bio'>
				<h4>Quick Career Biography</h4>
				<h6>
					After receiving my Bachelor's of Business Administration from Gonzaga,
					I attended the PDX Code Guild Bootcamp to make myself into a double
					threat. Once I was in the program, I realized that I wanted to pursue
					a career in web development. With that in mind, I started Caswel
					Marketing as a boutique marketing agency for political campaigns in
					Oregon. Caswel has allowed me to develop CMS websites for clients
					while also practicing my marketing / graphic design skills. In April
					2020, I embarked on Codecademy’s Web Development Career Path to take
					the next step towards my dream of becoming a developer! I finished
					their program in{" "}
					<a
						href='https://www.codecademy.com/profiles/rafawelsh/certificates/5b32457b646caa5007c30975'
						target='_blank'
						rel='noopener noreferrer'
						className='link'
					>
						September 2020
					</a>
					.
				</h6>
			</div>
			<div className='technologies'>
				<h4>Technologies I Can Work With</h4>
				<ul>
					<li>
						<i className='devicon-html5-plain'></i>
					</li>
					<li>
						<i className='devicon-css3-plain'></i>
					</li>
					<li>
						<i className='devicon-sass-original'></i>
					</li>
					<li>
						<i className='devicon-javascript-plain'></i>
					</li>
					<li>
						<i className='devicon-react-original'></i>
					</li>
					<li>
						<i className='devicon-nodejs-plain'></i>
					</li>
					<li>
						<i className='devicon-express-original'></i>
					</li>
					<li>
						<i className='devicon-git-plain'></i>
					</li>
					<li>
						<i className='devicon-heroku-original'></i>
					</li>
					<li>
						<i className='devicon-wordpress-plain'></i>
					</li>
				</ul>
			</div>
			<div className='personal-side'>
				<h4>Me outside of code</h4>
				<h6>
				I've always believed in allowing yourself to grow in seemingly random avenues. I have deep dived into the world of specialty coffee. From differentiating between brewing methods to cupping coffee, I love experiencing coffee. Music has been prevalent since I picked up my saxophone in middle school. With a minor is Jazz Performance, I can comfortably say that I am ready to jam out. Lastly, if you were to ask me what my greatest achievement is, I would say running my first marathon last year.
{" "}
				</h6>
			</div>
		</StyledAbout>
	);
}

export default About;
