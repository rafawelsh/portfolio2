import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import JournalAppVideo from "../../assets/videos/JournalAppVideo.gif";
import BearCoffeeVideo from "../../assets/videos/BearCoffeeVideo.gif";
import JammingVideo from "../../assets/videos/JammingVideo.gif";
import CaswelMarketingImg from "../../assets/imgs/CaswelMarketingImg.jpg";
import FrontendMentorImg from "../../assets/imgs/FrontendMentorImg.png";

const StyledProjectCardList = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 850px) {
		flex-direction: column;
		padding: 2em 0;
	}
`;

function ProjectCardList() {
	const projects = [
		{
			id: 1,
			title: "💻 Caswel Marketing",
			description:
				"I developed websites for Oregon political campaigns. Websites were developed using CMS and hosted on Bluehost or WPEngine. I also designed print and digital assets that campaigns used online and to mail constituents.",
			toolsUsed:
				"Wordpress, WPEngine, BlueHost, Adobe Suite, Google Analytics, Facebook",
			github: "",
			live: "https://caswelmarketing.com/",
			img: CaswelMarketingImg,
		},
		{
			id: 2,
			title: "☕️ Bear Coffee — Chingu Group Project",
			description:
				"Within this 6 week group project, I was tasked as Lead Designer and created wireframes using Figma. We held weekly sprint sessions to delegate tasks. I created 5 components using Svelte.js and contributed to pull requests.",
			toolsUsed: "Svelte.js, Elder.js, Stripe, Figma, Github, Notion",
			github: "https://github.com/chingu-voyages/v24-bears-team-05",
			live: "https://bearcoffee.netlify.app/",
			img: BearCoffeeVideo,
		},
		{
			id: 3,
			title: "📓 Journal App",
			description:
				"This app was created in 2 weeks using MaterialUI for quick prototyping. The backend is powered by a Node server and SQLlite3. This was the first full stack project I worked on without a tutorial to follow with.",
			toolsUsed:
				"React.js, React-Semantic, React Hooks, Node.js, Expess.js, SQLite3, Heroku, Github",
			github: "https://github.com/rafawelsh/Journal-App",
			live: "https://protected-eyrie-07703.herokuapp.com/",
			img: JournalAppVideo,
		},
		{
			id: 4,
			title: "👨🏽‍💻 Frontend Design Challenges",
			description:
				"This is a collection of challenges where I was given hi-fidelity designs and had to replicate them with no assistance. I was able to choose any technology. The goal is to enhance responsive web design and an understanding of UI and UX.",
			toolsUsed:
				"HTML, CSS, JavaScript, React, Styled Components, SCSS, Netlify",
			github: "https://github.com/rafawelsh/frontendMentorProjects",
			live: "https://thirsty-heisenberg-4267ea.netlify.app/",
			img: FrontendMentorImg,
		},
		{
			id: 5,
			title: "🎧 Jamming — Spotify Playlist App",
			description:
				"This React app is using the Spotify API to allow users to log in to their Spotify account, create a new playlist, and save it to their account. The focus points of this project were interacting with APIs, React prop rendering, and deploying an app.",
			toolsUsed: "React.js, Surge, Spotify API, Github",
			github: "https://github.com/rafawelsh/jamming",
			live: "http://codecademy-jamming-exercise.surge.sh/",
			img: JammingVideo,
		},
	];

	const projectList = projects.map((project) => (
		<ProjectCard key={project.key} project={project}></ProjectCard>
	));

	return (
		<StyledProjectCardList className='card-list'>
			{projectList}
		</StyledProjectCardList>
	);
}

export default ProjectCardList;
