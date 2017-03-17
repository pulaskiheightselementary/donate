import React from 'react';

import Button from './Button';

const About = () => (
	<div className="container">
		<h4 className="u-margin-top-medium">About the Pulaski Heights Elementary PTA</h4>

		<p>The Little Rock School District faces a $37 million dollar reduction in revenue annually beginning in the 2017-18 school year. This cut impacts a district already familiar with difficult financial decisions. Many LRSD schools cope with reduced support staff, decreased funding for specialized enrichment programs, and other budgeting challenges. The PHE PTA believes that the foundation laid in the minds of children in public schools will profoundly impact the foundation of our future. Society is shaped within the walls of these schools. It is our goal to partner with the district to keep our schools strong and give every child the best start possible.</p>

		<p>As parents and community members, we do not believe the answer to budget cuts and transition is to pull our children out of the public school system in order to provide them with quality education. Not only does taking kids out of public school increase financial and logistical burdens for many families, it also leaves a gap in the district that further weakens the system. The members of the PHE PTA believe that public school can be great. We believe that PHE is already great - a place with devoted staff where children can thrive and become strong contributors to their world. We want to keep it that way. We are committed to making sure that children from every background in our school have the chance to participate in enriching programs and academic competitions that challenge them. We are committed to supporting our teachers in their professional growth and endeavors to implement new ideas in the classroom. We want to help the district ensure that all children have the supplies, food, and books they need to begin their educational journey.</p>

		<p>By supporting Pulaski Heights Elementary, a wide cross-section of Little Rock School District is served. Little Rock has a deep history of segregation. The racial and economic make up of many Little Rock schools still reflects this division. Walking the halls of PHE, you would not suspect that this is the case. Not only does PHE serve a very equally weighted racial makeup that is rare in the district, it is zoned as a school for all socioeconomic groups - children from shelters and upper class neighborhoods alike. This integration makes PHE an important school for benefiting the entire community and furthering equality in education.</p>

		<div className="u-margin-bottom-x-large">
			<Button isPrimary url="/">Donate To PHE</Button>
		</div>
	</div>
);

export default About;
