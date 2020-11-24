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
				"I started Caswel Marketing to work as a contractor with clients within politics. I have worked with 3 state district races and other local races. Works ranges from producing custom WordPress websites, graphic assets, and lite digital marketing.",
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
				"Chingu.io is a program that groups developers to emulate a remote work experience where each team develops their own app within a 6 week period. I was the 'Designer' of the team. We designed a coffee ecommerce while learning new technologies.",
			toolsUsed: "Svelte.js, Elder.js, Stripe, Figma, Github, Notion",
			github: "https://github.com/chingu-voyages/v24-bears-team-05",
			live: "https://bearcoffee.netlify.app/",
			img: BearCoffeeVideo,
		},
		{
			id: 3,
			title: "📓 Journal App",
			description:
				"This journal app was part of my application for the Chingu program. They require applicants to showcase their skills before starting a 'voyage' with them. The app has CRUD functionality.",
			toolsUsed:
				"React.js, React-Semantic, React Hooks, Node.js, Expess.js, SQLite3, Heroku, Github",
			github: "https://github.com/rafawelsh/Journal-App",
			live: "https://protected-eyrie-07703.herokuapp.com/",
			img: JournalAppVideo,
		},
		{
			id: 4,
			title: "👨🏽‍💻 FrontendMentior.io Designs",
			description:
				"FrontendMentor.io offers free design challenges for web designers to practice with. You are given the basic styles and an image to base your code with. This has been a great source to practice my HTML, CSS, JS, and other technologies.",
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
