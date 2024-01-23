import Head from 'next/head';
import Header from '../../components/Header';
import styles from '../../styles/layout.module.css';
// @ts-ignore
import Red_Knight_Video from '../../resources/Red_Knight_Image.mp4';
// @ts-ignore
import Five_Guys_Video from '../../resources/FiveGuys.mp4';
// @ts-ignore
import Envolee_Historique_Video from '../../resources/normandie_niemen.mp4';
// @ts-ignore
import Twitc_Tracker_Video from '../../resources/TwitchTracker.mp4';
// @ts-ignore
import Artikles_Video from '../../resources/Artikles.mp4';

import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <main className={styles.projects}>
        <h1>My Projects</h1>
        <ul>
          <li>
            <ProjectCard
              video={Red_Knight_Video}
              title="The Red Knight"
              detailsUrl="/The_Red_Knight"
              content={{
                goal: "As a brave knight, you will travel the world and fight numerous enemies to survive!",
                description: "2D rogue-like video game with random map generation.",
                techno: "C#, Unity engine",
                projectType: "Student project, developed in a group of 5."
              }}
            />
          </li>
          <li>
            <ProjectCard
              video={Five_Guys_Video}
              title="Five Guys"
              detailsUrl="/projects/Five_Guys"
              content={{
                goal: "Choose one of the 5 available characters to explore the dungeon. Collect items, face enemies, defeat bosses, and find the exit.",
                description: "2D rogue-like video game with random map generation.",
                techno: "C#, Unity engine",
                projectType: "Student project, developed in a group of 5."
              }}
            />
          </li>
          <li>
            <ProjectCard
              video={Envolee_Historique_Video}
              title="Historical Flight: Normandie-Niémen"
              detailsUrl="/Envolee_Historique"
              content={{
                goal: "Embark on a unique experience through aerial combat of World War II with the 2/30 Fighter Regiment 'Normandie-Niémen'.",
                description: "Immerse yourself in the history of this French Air Force combat unit that made history by being the only Western force to fight alongside the Red Army on Soviet soil during World War II. Become a French aviator aboard your airplane in the heart of the most iconic battles of that time.",
                techno: "C++, Unreal Engine, VR",
                projectType: "Student project, developed in a group of 5."
              }}
            />
          </li>
          {/* <li>
              <ProjectCard
                video={Twitc_Tracker_Video}
                title="Twitch Tracker"
                content={{
                  goal: "Create a web application to track Twitch.tv streamers.",
                  description: "Web application for tracking purposes.",
                  techno: "Vue.js, HTML, CSS",
                  projectType: "Student project"
                }}
              />
          </li>
          <li>
              <ProjectCard
                video={Artikles_Video}
                title="Artikles"
                content={{
                  goal: "Create a web application to track Twitch.tv streamers.",
                  description: "Web application for tracking purposes.",
                  techno: "Vue.js, HTML, CSS",
                  projectType: "Student project"
                }}
              />
          </li> */}
        </ul>
      </main>
    </>
  );
};

export default Projects;
