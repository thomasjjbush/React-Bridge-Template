import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';

class Footer extends Component {
  	render() {
    	return (
			<footer className="footer">
				<SocialIcon network="facebook" color="#fffe00" style={{ height: 32, width: 32 }} />
				<SocialIcon network="linkedin" color="#fffe00" style={{ height: 32, width: 32 }} />
				<SocialIcon network="twitter" color="#fffe00" style={{ height: 32, width: 32 }} />
			</footer>
    	);
  	}
}

export default Footer;
