import React from "react";
import "../../App.css";
import styled from "styled-components";
import brandImg from "../../assets/imgs/brandIdea.png";

const StyledHome = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: var(--baseColor);
	color: var(--mainText);

	ul {
		display: flex;
		flex-direction: row;
		list-style-type: none;
	}

	li {
		padding: 0.5em 1em;
	}

	.brand {
		content: "";
		position: absolute;
		top: 2%;
		right: 5%;
		width: 150px;
		height: 150px;
		transform-origin: center center;
		background-image: url(${brandImg});
		background-repeat: no-repeat;
		background-size: contain;
		animation-name: rotateElement;
		animation-duration: 5s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		z-index: 3;
	}

	@keyframes rotateElement {
		from {
			transform: rotate(0);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

function Homepage() {
	return (
		<StyledHome className='hero'>
			<div className='brand'></div>
			<div className='hero-intro'>
				<h1>Rafael Castellanos-Welsh</h1>
				<h2>Frontend Web Developer | Graphic Design</h2>
				<h5>Current Project: Chingu Voyage 24</h5>
			</div>
			<div className='hero-links'>
				<ul>
					<li>
						<a
							href='https://www.linkedin.com/in/rafaelcastellanos-welsh/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-linkedin'></i>
						</a>
					</li>
					<li>
						<a
							href='https://github.com/rafawelsh'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-github-square'></i>
						</a>
					</li>
					<li>
						<a
							href="mailto:name@rapidtables.com?subject=Saw%Your%Cool%Website.%20Let's%20Talk."
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fas fa-envelope'></i>
						</a>
					</li>
					<li></li>
				</ul>
			</div>
		</StyledHome>
	);
}

export default Homepage;
