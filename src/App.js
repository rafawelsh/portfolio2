import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Homepage/Homepage";
import Projects from "./components/Projects/Projects";
import ProjectCardList from "./components/Projects/ProjectCardList";
import About from "./components/About/About";

function App() {
	return (
		<div className='App'>
			<Homepage />
			<Projects>
				<ProjectCardList />
			</Projects>
			<About />
		</div>
	);
}

export default App;
