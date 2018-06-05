import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Data from './data/pages';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import OurWork from './components/Work/OurWork';
import ContactUs from './components/Contact/ContactUs';
import Footer from './components/Footer/Footer';

class App extends Component {
  	render() {
    	return (
			<div className="app">
				<Navigation />
				<Switch
					atEnter={{ opacity: 0 }}
					atLeave={{ opacity: 0 }}
					atActive={{ opacity: 1 }}
					className="contentWrapper"
				>
					{Data.pages.map((page, i) => {
						const compObj = [
							Home,
							About,
							OurWork,
							ContactUs
						], 
							CompObjUse = compObj[i]
						return (
							<Route 
								key={i}
								exact 
								path={`/${page.path}/`} 
								className="page"
								component={(props) => <CompObjUse {...props} userScrollUpdateNav={this.userScrollUpdateNav} />}
							/>
						)
					})}
				</Switch>
				<Footer />
			</div>
    	);
  	}
}

export default App;
