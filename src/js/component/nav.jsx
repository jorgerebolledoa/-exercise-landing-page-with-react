import React from "react";
import PropTypes from "prop-types";
const Nav = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
					{props.title}
				</a>
				<button
					className="navbar-toggler text-white"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-white"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Link
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-white"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Dropdown
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown">
								<li>
									<a
										className="dropdown-item text-white"
										href="#">
										Action
									</a>
								</li>
								<li>
									<a
										className="dropdown-item text-white"
										href="#">
										Another action
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a
										className="dropdown-item text-white"
										href="#">
										Something else here
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled text-white">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
Nav.propTypes = {
	title: PropTypes.string,
};

export default Nav;
