import React from "react";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Projects from "./components/Projects/Projects";
import ProjectCardList from "./components/Projects/ProjectCardList";
import About from "./components/About";

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
