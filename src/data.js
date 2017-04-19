import shuffle from 'lodash.shuffle';

import gardenProgram from './images/garden-program.jpg';
import gardenProgramDonate from './images/garden-program-2.jpg';
import teacherGrants from './images/teacher-grants.jpg';
import teacherGrantsDonate from './images/teacher-grants-2.jpg';
import schoolSupplies from './images/school-supplies.jpg';
import schoolSuppliesDonate from './images/school-supplies-2.jpg';
import artMusic from './images/art-music.jpg';
import artMusicDonate from './images/art-music-2.jpg';
import academicCompetitions from './images/academic-competitions.jpg';
import academicCompetitionsDonate from './images/academic-competitions-2.jpg';
import readingIsFundamental from './images/reading-is-fundamental.jpg';
import readingIsFundamentalDonate from './images/reading-is-fundamental-2.jpg';

const campaigns = shuffle([
	{
		title: 'Support the Garden Program',
		description: 'In the PHE garden children plant, tend, harvest, and cook healthy food. Under the expert instruction of a garden teacher, students learn the hard work and patience required for cultivation and the lifelong benefits of farm to table nutrition. This program is paid for exclusively by the PHE PTA.',
		img: gardenProgram,
		donateImg: gardenProgramDonate,
		key: 'garden',
		embedCode: 'garden-program'
	},
	{
		title: 'Support Staff Development and Teacher Grants',
		description: 'Excellent teachers are the heartbeat of PHE. They have dreams for improving education but often face budget and logistical barriers. Money donated to this fund allows teacher to submit proposals and receive resources for approved ideas.',
		img: teacherGrants,
		donateImg: teacherGrantsDonate,
		key: 'staff',
		embedCode: 'staff-development-and-teacher-grants'
	},
	{
		title: 'Support a PHE Child in Need',
		description: 'The PTA wants to make sure that every child can begin their day with a full stomach and come to school prepared with the necessary supplies to succeed. Money donated to this fund will provide meals and school supplies to children in need.',
		img: schoolSupplies,
		donateImg: schoolSuppliesDonate,
		key: 'supplies',
		embedCode: 'a-child-in-need'
	},
	{
		title: 'Support the Art and Music Program',
		description: 'Make sure that there is no limit to creation at PHE by supporting the art and music program. This fund ensures that the art and music classrooms are stocked with all the necessary supplies for children to flourish.',
		img: artMusic,
		donateImg: artMusicDonate,
		key: 'art-music',
		embedCode: 'art-and-music-programs'
	},
	{
		title: 'Support Academic Competitions',
		description: 'Events such as science fair, spelling bee, geography bee, and math olympiad foster learning and healthy competition that inspires excellence. Help kids reach for the stars by donating to keep these events going strong.',
		img: academicCompetitions,
		donateImg: academicCompetitionsDonate,
		key: 'competitions',
		embedCode: 'academic-competitions'
	},
	{
		title: 'Support Reading is Fundamental',
		description: 'Reading is fundamental provides every child at PHE with a free book twice a year. Research shows that children who grow up with books in their home fair better academically. We want every child to have this advantage.',
		img: readingIsFundamental,
		donateImg: readingIsFundamentalDonate,
		key: 'reading',
		embedCode: 'reading-is-fundamental'
	}
]);

export { campaigns };
