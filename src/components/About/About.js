import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Hero from './../Hero/Hero';
import Data from './../../data/about';
import './About.css';

class About extends Component {
  	render() {
    	return (
			<div className="about">
				<Hero />
				<VerticalTimeline>
					{Data.about.map((timeline, i) => {
						return (
							<VerticalTimelineElement
								key={i}
								className={timeline.classes.block}
								iconStyle={{ background: '#000' }}
							>
								<h3 className={timeline.classes.title}>{timeline.content.title}</h3>
								<h4 className={timeline.classes.subtitle}>{timeline.content.subtitle}</h4>
								<p>{timeline.content.text}</p>
							</VerticalTimelineElement>
						)
					})}
				</VerticalTimeline>
			</div>
    	);
  	}
}

export default About;
