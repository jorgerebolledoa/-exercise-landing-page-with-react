import React from "react";
import Nav from "./nav.jsx";
import Cards from "./cards.jsx";
import Jumbotron from "./jum.jsx";
import Footer from "./fo.jsx";

//include images into your bundle
import propTypes from "prop-types";

//create your first component

const Home = () => {
	return (
		<>
			<Nav title="StartBooststrap" />
			<Jumbotron
				title="Custom jumbotron"
				text="Using a series of utilities, you can create this jumbotron,
			just like the one in previous versions of Bootstrap. Check
			out the examples below for how you can remix and restyle it
			to your liking."
				textbtn="Example button"
			/>
			<Cards />
			<Footer title="Cop" />
		</>
	);
};

export default Home;
