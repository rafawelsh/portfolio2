import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
	height: 90vh;
	width: 75vw;
	background-color: var(--secondaryBaseColor);
	margin: 0 1.5rem;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
`;

function ProjectCard({ project }) {
	return (
		<StyledCard className='card' id={project.key}>
			<div>
				<h3>{project.title}</h3>
				<h5>{project.toolsUsed}</h5>
				{project.github === "" ? (
					<p>
						<a href={project.live}>View Caswel Portfolio</a>
					</p>
				) : (
					<p>
						Check the <a href={project.github}>Github Repo</a> |{" "}
						<a href={project.live}>View Live Demo</a>
					</p>
				)}
				<img src={project.img} alt='' />
				<h6>{project.description}</h6>
			</div>
		</StyledCard>
	);
}

export default ProjectCard;
