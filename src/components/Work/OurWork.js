import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Hero from './../Hero/Hero';
import Data from '../../data/work';
import './Work.css';

class OurWork extends Component {
  	render() {
    	return (
			<div className="work">
				<Hero />
				<section className="work__examples">
					{Data.work.map((work, i) => {
						return (
							<Fade key={i}>
								<article className="work__examples__example" dir={work.dir}>
									<div dir="ltr" className="work__examples__example--text block">
										<h3>{work.client}</h3>
										<div className="description">
											{work.description.map((text, i) => {
												return <p key={i}>{text}</p>
											})}	
										</div>
									</div>
									<div 
										className={`work__examples__example--img block ${work.img}`}
									/>
								</article>
							</Fade>
						)
					})}
				</section>
			</div>
    	);
  	}
}

export default OurWork;
