import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/layout.module.css';
// @ts-ignore
import Red_Knight_Video from '../ressources/Red_Knight_Image.mp4'
// @ts-ignore
import Five_Guys_Video from '../ressources/FiveGuys.mp4'
// @ts-ignore
import Envolee_Historique_Video from '../ressources/normandie_niemen.mp4'
// @ts-ignore
import Twitc_Tracker_Video from '../ressources/TwitchTracker.mp4'
// @ts-ignore
import Artikles_Video from '../ressources/Artikles.mp4'

import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <main className={styles.projects} >
        <h1>Mes projects</h1>
        <ul>
          <li>
              <ProjectCard
                video={Red_Knight_Video}
                title="The Red Knight"
                content={{
                  goal: "Incarnant un courageux chevalier, vous devrez parcourir le monde et combattre de nombreux ennemis afin de vous en sortir !",
                  description: "Jeu vidéo de type rogue-like 2D avec génération de map aléatoire",
                  techno: "C#, moteur Unity",
                  projectType: "Projet étudiant, réalisé en groupe de 5"
                }}
              />
          </li>
          <li>
              <ProjectCard
                video={Five_Guys_Video}
                title="Five Guys"
                content={{
                  goal: "Choisissez l’un des 5 personnages disponibles pour parcourir le donjon. Récoltez des items, affrontez les ennemis, terrassez les boss pour trouver la sortie",
                  description: "Jeu vidéo de type rogue-like 2D avec génération de map aléatoire",
                  techno: "C#, moteur Unity",
                  projectType: "Projet étudiant, réalisé en groupe de 5"
                }}
              />          
          </li>
          <li>
              <ProjectCard
                video={Envolee_Historique_Video}
                title="L'envolée historique : Normandie-Niémen"
                content={{
                  goal: "Embarquez pour une expérience unique à travers les combats aériens de la Seconde Guerre mondiale avec le régiment de chasse 2/30 « Normandie-Niémen »",
                  description: "Plongez-vous dans l'histoire de cette unité de combat de l'Armée de l'air française, qui a marqué l'histoire en étant la seule force occidentale à s’être battue aux côtés de l’Armée rouge sur le sol soviétique durant la Seconde Guerre mondiale. Devenez un aviateur français à bord de votre avion en plein cœur des batailles les plus emblématiques de l'époque.",
                  techno: "C++, moteur Unreal Engine, VR",
                  projectType: "Projet étudiant, réalisé en groupe de 5"
                }}
              />
          </li>
          {/* <li>
              <ProjectCard
                video={Twitc_Tracker_Video}
                title="Twitch Tracker"
                content={{
                  goal: "Créer une application web permettant de suivre les streamers de Twitch.tv",
                  description: "Application web de type tracker",
                  techno: "Vue.js, HTML, CSS",
                  projectType: "Projet étudiant"
                }}
              />
          </li>
          <li>
              <ProjectCard
                video={Artikles_Video}
                title="Artikles"
                content={{
                  goal: "Créer une application web permettant de suivre les streamers de Twitch.tv",
                  description: "Application web de type tracker",
                  techno: "Vue.js, HTML, CSS",
                  projectType: "Projet étudiant"
                }}
              />
          </li> */}
        </ul>
      </main>
    </>
  );
};

export default Projects;
