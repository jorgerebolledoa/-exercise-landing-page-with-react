import React from "react";
import Nav from "./nav.jsx";
import Cards from "./cards.jsx";
import Ju from "./jum.jsx";
import Fo from "./fo.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	return (
		<>
			<Nav />
			<Ju />
			<Cards />
			<Fo />
		</>
	);
};

export default Home;
