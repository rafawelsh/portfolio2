import { createGlobalStyle } from "styled-components";
import BilderbergOTF from "../fonts/Bilderberg.otf";
import BilderbergTTF from "../fonts/Bilderberg.ttf";
export default createGlobalStyle`
    @font-face {
        font-family: 'Bilderberg';
        src: url('${BilderbergTTF}') format("truetype"),
        url('${BilderbergOTF}') format("opentype");
        font-style: normal;
    }

    body {
	margin: 0;
	background-color: var(--baseColor);
    }
    h1,
    h2,
    h3 {
      font-family: Bilderberg
    }

    //styles that need to be re-done and edited
    :root {
	--baseColor: #f9cd96;
	--mainText: #5764ad;
	--secondaryBaseColor: #ffddb3;
	--secondaryText: #6b76b3;
	--linkColor: #b15b47;
}

/* nigth theme
--baseColor: #292c36;
	--mainText: #ed7868;
	--secondaryBaseColor: #3d4663;
	--secondaryText: #6b76b3; */

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	color: var(--mainText);
}

h1 {
	font-size: 4rem;
}
h2 {
	font-size: 3rem;
}
h3 {
	font-size: 2rem;
}
h4 {
	font-size: 1.75rem;
}
h5 {
	font-size: 1.25rem;
}
h6 {
	font-size: 1.125rem;
}
p {
	font-size: 1em;
}

i {
	color: var(--mainText);
	font-size: 4rem;
}
a.link {
	color: var(--linkColor);
	text-decoration: none;
	position: relative;
}

a.link::after {
	border-bottom: 4px solid var(--linkColor);
	content: "";
	position: absolute;
	left: 0;
	right: 100%;
	bottom: -1.5%;
	transition: right 0.5s cubic-bezier(0, 0.5, 0, 1);
}

a.link:hover {
	text-decoration: none;
}

a.link:hover::after {
	border-color: var(--linkColor);
	right: 0;
}
/* media query for tablet  */
@media only screen and (min-device-width: 551px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
	h1 {
		font-size: 4rem;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-size: 2.25rem;
	}
	h4 {
		font-size: 2rem;
	}
	h5 {
		font-size: 1.75rem;
	}
	h6 {
		font-size: 1.25rem;
	}
	p {
		font-size: 1em;
	}
	i {
		font-size: 4rem;
	}
}
/* media query for mobile portrait */
@media screen and (max-width: 600px) {
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 1.75rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	h4 {
		font-size: 1.25rem;
	}
	h5 {
		font-size: 1.125rem;
	}
	h6 {
		font-size: 1.025rem;
	}
	p {
		font-size: 1em;
	}
	i {
		font-size: 2.5rem;
	}
}
/* media query for mobile landscape */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape) {
	h1 {
		font-size: 1.5rem;
	}
	h2 {
		font-size: 1.1rem;
	}
	h3,
	h4 {
		font-size: 1.125rem;
	}
	h5,
	h6 {
		font-size: 1rem;
	}
	p {
		font-size: 0.8em;
	}
	i {
		font-size: 2rem;
	}
}

`;
