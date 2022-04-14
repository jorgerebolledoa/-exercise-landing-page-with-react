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
			<Jumbotron />
			<Cards />
			<Footer title="Cop" />
		</>
	);
};

export default Home;
