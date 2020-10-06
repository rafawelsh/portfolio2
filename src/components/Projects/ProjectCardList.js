import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import JournalAppVideo from "../../assets/videos/JournalAppVideo.gif";
import JammingVideo from "../../assets/videos/JammingVideo.gif";
import CaswelMarketingImg from "../../assets/imgs/CaswelMarketingImg.jpg";
import FrontendMentorImg from "../../assets/imgs/FrontendMentorImg.png";

const StyledProjectCardList = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

function ProjectCardList() {
	const projects = [
		{
			id: 1,
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
			id: 2,
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
			id: 3,
			title: "💻 Caswel Marketing",
			description:
				"As Caswel Marketing I have worked with 3 state district races and local races. Works ranges from  producing custome Wordpress websites, graphic assets, and lite digital marketing.",
			toolsUsed:
				"Wordpress, WPEngine, BlueHost, Adobe Suite, Google Analytics, Facebook",
			github: "",
			live: "https://caswelmarketing.com/",
			img: CaswelMarketingImg,
		},
		{
			id: 4,
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
