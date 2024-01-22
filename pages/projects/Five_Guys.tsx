// FiveGuys.jsx

import React from 'react';
import ProjectDetail from '../../components/ProjectDetail';
import ExtendedDescription from '../../components/ExtendedDescription';
// Assuming the correct module name is ExtendedDescription.module.css
import stylesExtended from '../../styles/ExtendedDescription.module.css';
import styles from '../../styles/PageWrapper.module.css'; // Assume these are page common styles
// @ts-ignore
import Five_Guys_Video from '../../ressources/FiveGuys.mp4';

const FiveGuys = () => {
  const projectData = {
    title: "Five Guys",
    video: Five_Guys_Video,
    goal: "Choose one of the 5 available characters to explore the dungeon. Collect items, fight enemies, defeat bosses to find the exit.",
    techno: "C#, Unity Engine",
    projectType: "Student project, developed in a team of 5",
    description: ":"
  };
  
  const detailSections = [
    {
      title: 'Prepare to Dive',
      text: 'Engage with Five Guys unique blend of visuals and rogue-like gameplay, selecting from five distinct characters to navigate the unknown depths of dynamic dungeons.',
    },
    {
      title: 'Explore Diverse Dungeons',
      text: 'Every playthrough offers new challenges with procedurally generated environments and a rich mix of enemies, demanding unique strategic approaches each time.',
    },
    {
      title: 'Consciously Crafted Characters',
      text: 'Decisive character choice influences play style, from brute force combat to clever evasion or mystical prowess, for overcoming obstacles and enemies.',
    },
    {
      title: 'Collect, Conquer, and Emerge Triumphant',
      text: 'Prove your skill in strategic boss battles and puzzle-solving with carefully acquired power-ups to claim victory and find the way out of the ever-changing abyss.',
    },
    {
      title: 'Brought to Light by Unity and C#',
      text: 'Built for robust and smooth gameplay, Five Guys showcases the power of Unity and C# through a vividly designed and highly responsive game experience.',
    },
    {
      title: 'A Synergy of Minds',
      text: 'A joint effort by a student team of five, Five Guys represents the culmination of shared creativity and the fruits of a collective journey into game design.',
    },
    {
      title: 'Closing Thoughts',
      text: 'Marking both a developmental milestone for the team and a venture into innovative gameplay, Five Guys invites an expansive audience to unforgettable dungeon exploits.',
    },
  ];

  return (
    <div className={styles.pageWrapper}> {/* Common styles for the page container */}
      <ProjectDetail projectData={projectData} />
      {/* Timestamped styles resolution prevents potential CSS order issues */}
      <div className={`${stylesExtended.extendedDescription} timestamped`}> 
        <ExtendedDescription sections={detailSections} /> 
      </div>
    </div>
  );
};

export default FiveGuys;
