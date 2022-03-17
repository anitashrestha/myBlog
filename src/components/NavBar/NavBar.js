import React from "react";
import { Link } from "react-router-dom";

import "../NavBar/NavBar.css";

const NavBar = () => {
	return (
		<div className="navbar-container">
			<nav className="nav">
				<div className="mobile-menu"></div>
				<div className="main-menu-container">
					<div className="main-menu">
						<div className="logo-container">
							<a href="/" className="logo" aria-label="Homepage">
								BLOG.
							</a>
						</div>
						<div className="nav-container db">
							<div className="pb db">
								<Link to="/">Home</Link>
							</div>
							<div className="pb db">
								<Link to="/about">About</Link>
							</div>
							<div className="pb db">
								<Link to="/articles-list">Articles</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
