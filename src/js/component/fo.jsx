import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
	return (
		<div className="p-3  bg-dark  text-center">
			<div className="text-white">{props.title}</div>
		</div>
	);
};
Footer.propTypes = {
	title: PropTypes.string,
};
export default Footer;
