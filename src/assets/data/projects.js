import { v4 as uuidv4 } from 'uuid';
import GarysBadJokesImg from '../images/garys-bad-jokes.png';
import AlohaImg from '../images/dashboard.png';
import JobSerchify from '../images/Splash-page.png';
import WorkDaySchedulerImg from '../images/Screen Shot 2022-04-05 at 12.37.37 AM.png';
import JonathansImg from '../images/Index-portfolio-page.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Alo-Ha the Plant Store',
    desc:
      'This is the second group project involving backend API routes also using login encryption.',
    img: AlohaImg,
  },
  {
    id: uuidv4(),
    name: 'JOB.searchify()',
    desc:
      'Our team was inpsired by the turning point we are entering in our web development career. Following the completion of our bootcamp we will step out into the tech world looking for a place to land hoping to successfully use the skills we have learned and continue to learn as we grow in our new positions. We wanted to provide a tool that would help in the process of finding and preparing for the perfect job.',
    img: JobSerchify,
  },
  {
    id: uuidv4(),
    name: 'WorkDay Scheduler',
    desc:
      'A simple calendar application that allows a user to save events for each hour of the day.',
    img: WorkDaySchedulerImg,
  },
  {
    id: uuidv4(),
    name: 'My Portfolio',
    desc: 'My portfolio written in Html, css, & javascript.',
    img: JonathansImg,
  },
  {
    id: uuidv4(),
    name: 'Garys Bad Jokes',
    desc:
      'This is group project built during my time at SMU Coding Bootcamp, our instructors bad jokes. This was our first group project built using and implementing API',
    img: GarysBadJokesImg,
  },
];

export default projects;
