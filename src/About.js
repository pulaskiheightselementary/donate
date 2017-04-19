import React from 'react';

import Button from './components/button';
import Column from './components/column';
import Row from './components/row';

import about from './images/about.jpg';

const About = () => (
	<div>
		<h4 className="u-margin-top-medium">About the Pulaski Heights Elementary PTA</h4>
		<Row>
			<Column reversed size="four">
				<img
					alt=""
					className="u-margin-bottom-large"
					src={about}
					style={{ maxWidth: '294px', width: '100%' }}
				/>
			</Column>
			<Column reversed size="eight">
				<p>At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Budget cuts in a school district already facing difficult financial decisions means we all need to pitch in.  It is our goal to partner with the district to keep our schools strong and give every child the best start possible. The members of the PHE PTA believe that public school can be great. We believe that PHE is already great - a place with devoted staff where children can thrive and become strong contributors to their world. We want to keep it that way.</p>

				<p>We are committed to making sure that children from every background in our school have the chance to participate in enriching programs and academic competitions that challenge them. We are committed to supporting our teachers in their professional growth and endeavors to implement new ideas in the classroom. We want to help the district ensure that all children have the supplies, food, and books they need to begin their educational journey. Our school is nestled in the heart of Little Rock and is zoned for a wide, diverse cross-section of the Little Rock community.</p>

				<p>Your partnership makes it possible for the PHE PTA to invest in every child who comes through our doors. Thanks for being our community.</p>

				<div className="u-margin-bottom-x-large">
					<Button isPrimary url="/">Donate To PHE</Button>
				</div>
			</Column>
		</Row>
	</div>
);

export default About;
