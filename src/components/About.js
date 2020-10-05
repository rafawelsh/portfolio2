import React from "react";
import styled from "styled-components";
import brandImg2 from "../assets/imgs/brandIdea.png";

const StyledAbout = styled.div`
	height: 100vh;
	background-color: var(--baseColor);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	ul {
		display: flex;
		flex-direction: row;
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
`;

function About() {
	return (
		<StyledAbout className='about'>
			<div>
				<h2>A little about myself</h2>
				<div className='best-mems'>
					<h4>Quick Career Biography</h4>
					<h6>
						After receiving my Bachelor's of Business Administration from
						Gonzaga I attended the PDX Code Guild Bootcamp to make myself into a
						double threat. Once I was in the program, I realized that web
						development was too interesting to just take part time. I decided to
						pursue web development as my full time work. With that in mind I
						started Caswel Marketing as a boutique marketing agency for
						political campaigns in Oregon. I have worked with 3 district races,
						multiple smaller campaigns, and a few ballet initiatives. In April
						2020, I embarked on Codecademy’s Web Development Career Path to take
						the next serious step towards my dream of becoming a developer! I
						finished their program in INSERT LINK HERE September 2020.
					</h6>
					<h4>Technologies I Can Work With</h4>
					<ul>
						<li>
							<i class='devicon-html5-plain'></i>
						</li>
						<li>
							<i class='devicon-css3-plain'></i>
						</li>
						<li>
							<i class='devicon-sass-original'></i>
						</li>
						<li>
							<i class='devicon-javascript-plain'></i>
						</li>
						<li>
							<i class='devicon-react-original'></i>
						</li>
						<li>
							<i class='devicon-nodejs-plain'></i>
						</li>
						<li>
							<i class='devicon-express-original'></i>
						</li>
						<li>
							<i class='devicon-git-plain'></i>
						</li>
						<li>
							<i class='devicon-heroku-original'></i>
						</li>

						<li>
							<i class='devicon-git-plain'></i>
						</li>
						<li>
							<i class='devicon-wordpress-plain'></i>
						</li>
					</ul>
					<h4>Me outside of code</h4>
					<h6>
						I am a coffee snob. I won’t make fun of you for not knowing what
						cupping is but I will not drink Starbucks. I also love jazz music. I
						took a minor in Jazz Performance and enjoy to play with groups. I I
						have rediscovered the joy within books. I brew myself a nice single
						origin cup of coffee and read a good book. If you were to ask me
						what my biggest accomplishment is, I would answer with completing my
						first marathon last year.{" "}
					</h6>
				</div>
			</div>
		</StyledAbout>
	);
}

export default About;
