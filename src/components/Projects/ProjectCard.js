import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	height: 85vh;
	width: 65vw;
	background-color: var(--secondaryBaseColor);
	margin: 0 1.5rem;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	div > * {
		padding: 0.25em;
	}
	h3,
	h5 {
		color: var(--mainText);
	}
	img {
		width: 70%;
	}
	//media query for tablet landscape
	@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
		height: 80vh;
		width: 80vw;
		justify-content: center;
		img {
			width: 60%;
		}
	}
	// media queries for tablet portrait
	@media only screen and (min-device-width: 551px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
		height: 85vh;
		width: 85vw;
		align-items: center;
		justify-content: center;
		img {
			width: 100%;
		}
	}
	// media queries for mobile landscape
	@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
		height: 85vh;
		width: 90vw;
		align-items: center;
		justify-content: center;
		img {
			width: 50%;
		}
	}
	//media queries for mobile portrait
	@media only screen and (min-device-width: 320px) and (max-device-width: 550px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
		height: 80vh;
		width: 90vw;
		justify-content: center;
		align-items: center;
		margin: 0 1rem;
		padding: 0 1rem;
		img {
			width: 90%;
		}
	}
`;

function ProjectCard({ project }) {
	return (
		<StyledCard className='card' id={project.key}>
			<div>
				<h3>{project.title}</h3>
				<h5>{project.toolsUsed}</h5>
				{project.github === "" ? (
					<p>
						<a
							href={project.live}
							target='_blank'
							rel='noopener noreferrer'
							className='link'
						>
							View Caswel Portfolio
						</a>
					</p>
				) : (
					<p>
						Check the{" "}
						<a
							href={project.github}
							target='_blank'
							rel='noopener noreferrer'
							className='link'
						>
							Github Repo
						</a>{" "}
						|{" "}
						<a
							href={project.live}
							target='_blank'
							rel='noopener noreferrer'
							className='link'
						>
							View Live Demo
						</a>
					</p>
				)}
				<img src={project.img} alt='' />
				<h6>{project.description}</h6>
			</div>
		</StyledCard>
	);
}

export default ProjectCard;
