import React from 'react';

import './Home.css';

import gardenProgram from './images/garden-program.jpg';
import teacherGrants from './images/teacher-grants.jpg';
import schoolSupplies from './images/school-supplies.jpg';
import artMusic from './images/art-music.jpg';

import Header from './Header';
import Row from './Row';
import Tile from './Tile';

const App = () => (
  <div className="container">
    <Header />
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
  </div>
);

export default App;
