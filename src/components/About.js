import React from "react";
import styled from "styled-components";
import brandImg2 from "../assets/imgs/brandIdea.png";

const StyledAbout = styled.div`
	height: 100vh;
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
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		list-style-type: none;
	}

	li {
		padding: 0.5em 1em;
	}

	.brand2 {
		content: "";
		position: absolute;
		bottom: 2%;
		left: 5%;
		width: 150px;
		height: 150px;
		transform-origin: center center;
		background-image: url(${brandImg2});
		background-repeat: no-repeat;
		background-size: contain;
		animation-name: rotateElement;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@media screen and (max-width: 700px) {
		height: 100%;
	}
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
					while also practice my marketing / graphic design skills. In April
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
					I allow myself to invest time is any and all interests. I've always
					believed in allowing yourself to grow in seemingly random avenues. I
					have deep dived into the world of specialty coffee. From
					differentiating between brewing methods to cupping coffee, I love
					experiencing cofffee. Music has been prevelant since I picked up my
					saxophone in middle school. With a minor is Jazz Performance, I can
					comfortably say that I am ready to jam out. Lastly, if you were to ask
					me what my biggest accomplishment is, I would answer with completing
					my first marathon last year.{" "}
				</h6>
			</div>
		</StyledAbout>
	);
}

export default About;
