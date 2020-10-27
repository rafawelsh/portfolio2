import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// dynamically setting the height of the outermost container
const TallContainer = styled.div.attrs(({ dynamicHeight }) => ({
	style: { height: `${dynamicHeight}px` } || '100%',
}))`
	position: relative;
	width: 100%;
	background-color: var(--baseColor);

	@media only screen and (max-width: 850px) {
		max-height: 2200px
	}
	@media only screen and (max-device-width: 850px) {
		height: 100%
	}
	@media only screen and (min-device-width: 551px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
		max-height: 100%
	}
`;

// middle container sustaining the wide horizontal
const StickyContainer = styled.div`
	position: sticky;
	top: 0;
	height: 100vh;
	overflow-x: hidden;
	@media only screen and (max-width: 850px) {
		height: 100%
	}
`;

const HorizontalScroll = styled.div.attrs(({ translateX }) => ({
	style: { transform: `translateX(${translateX}px)` } || '0',
}))`
	position: absolute;
	height: 100%;
	will-change: transform;

	@media only screen and (max-width: 850px) {
		position: relative;
	}
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
		<div className='projects'>
			{window.innerWidth >= 850 ? (
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
			) : (
				<TallContainer dynamicHeight='100%' className='tallContainer'>
				<StickyContainer ref={containerRef} className='stickyContainer'>
					<HorizontalScroll
						translateX='0'
						ref={objectRef}
						className='horizontalScroll'
					>
						{children}
					</HorizontalScroll>
				</StickyContainer>
			</TallContainer>
			)}
		</div>
	);
}

export default Projects;
