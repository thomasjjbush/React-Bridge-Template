import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Hero from './../Hero/Hero';
import Data from './../../data/contact';
import Maps from './img/mapfake.png';
import './Contact.css'

class ContactUs extends Component {
  	render() {
    	return (
			<div className="contact">
				<Hero />
				<div className="content">
					<Fade>
						<form className="content__form">
							{Data.form.map((contact, i) => {
								return (
									<input
										key={i}
										name={contact.name}
										type={contact.type}
										placeholder={contact.placeholder}
										autoComplete="off"
										value={contact.value}
									/>
								)
							})}
						</form>
					</Fade>
					<img src={Maps} alt="maps" className="content__maps" />
				</div>
			</div>
    	);
  	}
}

export default ContactUs;
