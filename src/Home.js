import React from 'react';

import './Home.css';

import gardenProgram from './images/garden-program.jpg';
import teacherGrants from './images/teacher-grants.jpg';
import schoolSupplies from './images/school-supplies.jpg';
import artMusic from './images/art-music.jpg';
import academicCompetitions from './images/academic-competitions.jpg';
import readingIsFundamental from './images/reading-is-fundamental.jpg';

import Header from './Header';
import Row from './Row';
import Tile from './Tile';
import Footer from './Footer';

const App = () => (
  <div className="container">
    <Header
      alt="Children overseeing the the growth of cabbage in the garden."
      text="At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future."
    />

    <Row>
      <Tile
        title="Support the Garden Program"
        img={gardenProgram}
      >
        In the PHE garden children plant, tend, harvest, and cook healthy food. Under the expert instruction of a garden teacher, students learn the hard work and patience required for cultivation and the lifelong benefits of farm to table nutrition. This program is paid for exclusively by the PHE PTA.
      </Tile>
      <Tile
        title="Support Staff Development and Teacher Grants"
        img={teacherGrants}
      >
        Excellent teachers are the heartbeat of PHE. They have dreams for improving education but often face budget and logistical barriers. Money donated to this fund allows teacher to submit proposals and receive resources for approved ideas.
      </Tile>
    </Row>
    <Row>
      <Tile
        title="Support a PHE Child in Need"
        img={schoolSupplies}
      >
        The PTA wants to make sure that every child can begin their day with a full stomach and come to school prepared with the necessary supplies to succeed. Money donated to this fund will provide meals and school supplies to children in need.
      </Tile>
      <Tile
        title="Support the Art and Music Program"
        img={artMusic}
      >
        Make sure that there is no limit to creation at PHE by supporting the art and music program. This fund ensures that the art and music classrooms are stocked with all the necessary supplies for children to flourish.
      </Tile>
    </Row>
    <Row>
      <Tile
        title="Support Academic Competitions"
        img={academicCompetitions}
      >
        Events such as science fair, spelling bee, geography bee, and math olympiad foster learning and healthy competition that inspires excellence. Help kids reach for the stars by donating to keep these events going strong.
      </Tile>
      <Tile
        title="Support Reading is Fundamental"
        img={readingIsFundamental}
      >
        Reading is fundamental provides every child at PHE with a free book twice a year. Research shows that children who grow up with books in their home fair better academically. We want every child to have this advantage.
      </Tile>
    </Row>

    <Footer>
      To help the greatest number of children and ensure that no gift is wasted, funds raised on this page will be used to support programs in the greatest imminent need. 100% of funds support the endeavors of the PHE PTA as we strive to make our school a great choice for all families.
    </Footer>
  </div>
);

export default App;
