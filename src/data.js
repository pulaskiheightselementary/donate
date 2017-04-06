import gardenProgram from './images/garden-program.jpg';
import teacherGrants from './images/teacher-grants.jpg';
import schoolSupplies from './images/school-supplies.jpg';
import artMusic from './images/art-music.jpg';
import academicCompetitions from './images/academic-competitions.jpg';
import readingIsFundamental from './images/reading-is-fundamental.jpg';

export const campaigns = [
	{
		title: 'Support the Garden Program',
		description: 'In the PHE garden children plant, tend, harvest, and cook healthy food. Under the expert instruction of a garden teacher, students learn the hard work and patience required for cultivation and the lifelong benefits of farm to table nutrition. This program is paid for exclusively by the PHE PTA.',
		img: gardenProgram,
		key: 'garden',
		embedCode: '04db908a-c67e-4b25-93f3-18b9a7a13a9c'
	},
	{
		title: 'Support Staff Development and Teacher Grants',
		description: 'Excellent teachers are the heartbeat of PHE. They have dreams for improving education but often face budget and logistical barriers. Money donated to this fund allows teacher to submit proposals and receive resources for approved ideas.',
		img: teacherGrants,
		key: 'staff'
	},
	{
		title: 'Support a PHE Child in Need',
		description: 'The PTA wants to make sure that every child can begin their day with a full stomach and come to school prepared with the necessary supplies to succeed. Money donated to this fund will provide meals and school supplies to children in need.',
		img: schoolSupplies,
		key: 'supplies'
	},
	{
		title: 'Support the Art and Music Program',
		description: 'Make sure that there is no limit to creation at PHE by supporting the art and music program. This fund ensures that the art and music classrooms are stocked with all the necessary supplies for children to flourish.',
		img: artMusic,
		key: 'art-music'
	},
	{
		title: 'Support Academic Competitions',
		description: 'Events such as science fair, spelling bee, geography bee, and math olympiad foster learning and healthy competition that inspires excellence. Help kids reach for the stars by donating to keep these events going strong.',
		img: academicCompetitions,
		key: 'competitions'
	},
	{
		title: 'Support Reading is Fundamental',
		description: 'Reading is fundamental provides every child at PHE with a free book twice a year. Research shows that children who grow up with books in their home fair better academically. We want every child to have this advantage.',
		img: readingIsFundamental,
		key: 'reading'
	}
];
