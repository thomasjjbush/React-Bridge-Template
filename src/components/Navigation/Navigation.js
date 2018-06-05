import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Data from './../../data/pages';
import './Navigation.css';

class Navigation extends Component {
  	render() {
    	return (
			<nav className="navigation">
				<i className="navigation__logo"></i>
				<section className="navigation__links">
					{Data.pages.map((page, i) => {
						return (
							<NavLink
								key={i}
								exact={true}
								to={`/${page.path}`}
								className="navigation__links__link"
								activeClassName="navigation__links__link--active"
							>
								{page.name}
							</NavLink>
						)
					})}
				</section>
			</nav>
    	);
  	}
}

export default Navigation;
