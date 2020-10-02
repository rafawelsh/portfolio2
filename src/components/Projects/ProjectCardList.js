import React from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import JournalAppVideo from "../../assets/videos/JournalAppVideo.gif";
import CaswelMarketingImg from "../../assets/imgs/CaswelMarketingImg.jpg";

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
				"FrontendMentor.io offers free design challenges for web designers to practice with. You are given the basic styles and an image to base your code with. This has been a great source to practice my HTML, CSS, and JS. You are free to use any techlonogy of your choosing.",
			toolsUsed:
				"HTML, CSS, JavaScript, React, Styled Components, SCSS, Netlify",
			github: "https://github.com/rafawelsh/frontendMentorProjects",
			live: "https://thirsty-heisenberg-4267ea.netlify.app/",
			img: "INSERT IMG / VIDEO",
		},
		{
			id: 3,
			title: "💻 Caswel Marketing",
			description:
				"As Caswel Marketing I have worked with 3 state district races and local races. Works ranges from  producing custome Wordpress websites, graphic assets, and lite digital marketing.",
			toolsUsed: "Wordpress, WPEngine, Adobe Suite, Google Analytics, Facebook",
			github: "",
			live: "https://caswelmarketing.com/",
			img: CaswelMarketingImg,
		},
		{
			id: 4,
			title: "⏭ Recreation of Horizontal Scroll",
			description:
				"This journal app was part of my application for the Chingu program. They require applicants to showcase thir skills before starting a 'voyage' with them.",
			toolsUsed:
				"React.js, React-Semantic, React Hooks, Node.js, Expess.js, SQLite3, Heroku, Github",
			github: "INSERT LINK",
			live: "https://protected-eyrie-07703.herokuapp.com/",
			img: "INSERT IMG / VIDEO",
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
