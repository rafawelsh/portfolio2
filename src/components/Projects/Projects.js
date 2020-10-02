import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import styled from "styled-components";

// dynamically setting the height of the outermost container
const TallContainer = styled.div.attrs(({ dynamicHeight }) => ({
	style: { height: `${dynamicHeight}px` },
}))`
	position: relative;
	width: 100%;
	background-color: var(--baseColor);
`;

// middle container sustaining the wide horizontal
const StickyContainer = styled.div`
	position: sticky;
	top: 0;
	height: 100vh;
	width: 100%;
	overflow-x: hidden;
`;

const HorizontalScroll = styled.div.attrs(({ translateX }) => ({
	style: { transform: `translateX(${translateX}px)` },
}))`
	position: absolute;
	height: 100%;
	will-change: transform;
`;

const calcDynamicHeight = (objectWidth) => {
	const vw = window.innerWidth;
	const vh = window.innerHeight;
	return objectWidth - vw + vh;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
	const objectWidth = ref.current.scrollWidth;
	const dynamicHeight = calcDynamicHeight(objectWidth);
	setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
	window.addEventListener("scroll", () => {
		const offsetTop = -ref.current.offsetTop;
		setTranslateX(offsetTop);
	});
};

function Projects({ children }) {
	const [dynamicHeight, setDynamicHeight] = useState(null);
	const [translateX, setTranslateX] = useState(0);

	const containerRef = useRef(null);
	const objectRef = useRef(null);

	const resizedHandler = () => {
		handleDynamicHeight(objectRef, setDynamicHeight);
	};

	useEffect(() => {
		handleDynamicHeight(objectRef, setDynamicHeight);
		window.addEventListener("resize", resizedHandler);
		applyScrollListener(containerRef, setTranslateX);
	}, []);

	return (
		<div>
			<TallContainer dynamicHeight={dynamicHeight} className='tallContainer'>
				<StickyContainer ref={containerRef} className='stickyContainer'>
					<HorizontalScroll
						translateX={translateX}
						ref={objectRef}
						className='horizontalScroll'
					>
						{children}
					</HorizontalScroll>
				</StickyContainer>
			</TallContainer>
		</div>
	);
}

export default Projects;
