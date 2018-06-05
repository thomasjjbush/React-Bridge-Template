import React, { Component } from 'react';
import Typist from 'react-typist';
import './Home.css';

class Home extends Component {
  	render() {
    	return (
			<div className="home">
				<div className="home__content">
					<p className="home__content__title"><i>RIDGE</i>, WE ARE:</p>
					<div className="home__content__typist">
						<Typist>
							Brave
							<Typist.Backspace count={4} delay={2500} />
							.Rigorous
							<Typist.Backspace count={7} delay={2500} />
							.Intelligent
							<Typist.Backspace count={10} delay={2500} />
							.Distinct
							<Typist.Backspace count={7} delay={2500} />
							.Grafters
							<Typist.Backspace count={7} delay={2500} />
							.Exceptional
							<Typist.Backspace count={10} delay={2500} />
						</Typist>
					</div>
				</div>
			</div>
    	);
  	}
}

export default Home;
