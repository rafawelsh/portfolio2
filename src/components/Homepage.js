import React from "react";
import styled from "styled-components";

const StyledHome = styled.div`
	* {
		padding: 0.15em 0;
	}
	height: 100vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	background-color: var(--baseColor);
	color: var(--mainText);

	p {
		max-width: 600px;
		width: 80vw;
		padding-left: 1em;
	}

	.hero-links {
		ul {
			display: flex;
			flex-direction: row;
			list-style-type: none;
		}
	}

	li {
		padding: 0em 1em;
	}
`;

function Homepage() {
	return (
		<StyledHome className='hero'>
			<div className='hero-intro'>
				<h1>Rafael Castellanos-Welsh</h1>
				<h3>Frontend Web Developer | Graphic Designer</h3>
			</div>
			<div className='hero-links'>
				<ul>
					<li>
						<a
							href='https://www.linkedin.com/in/rafaelcastellanoswelsh/'
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
							href='mailto:rafaelcastellanoswelsh@gmail.com'
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
