import React from "react";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects/Projects";
import ProjectCardList from "./components/Projects/ProjectCardList";
import About from "./components/About";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<div className='app'>
			<GlobalStyles />
			<Homepage />
			<Projects>
				<ProjectCardList />
			</Projects>
			<About />
		</div>
	);
}

export default App;
