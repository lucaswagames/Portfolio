

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';

import Photo_professionel from '../ressources/Photo_professionel.jpg'
import { useEffect, useState } from 'react';


export default function About() {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>A propos de moi - Mon Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.maxence} >
              <span><Image src={Photo_professionel} alt="My image" width={1000} height={500} /></span>
              <div>
                <h2>Lucas Charbonnier</h2>
                <p>&nbsp;En tant que developpeur de jeux vidéo et passionné dans ce domaine
                  depuis mon plus jeune âge, je suis convaincu que je suis sur la bonne voie
                  pour réaliser mon rêve de devenir programmeur gameplay. J&apos;ai toujours
                  été fasciné par les jeux vidéo et les mondes fantastiques qu&apos;ils créent,
                  et je suis convaincu que je peux apporter ma contribution à cette industrie
                  en constante évolution. J&apos;ai acquis une solide expérience en utilisant des
                  moteurs de jeux tels que Unity et Unreal Engine, ainsi que des logiciels
                  de modélisation comme 3dsMax et Blender. Mon objectif est de continuer
                  à développer mes compétences techniques et créatives pour contribuer
                  au développement de jeux qui apporteront de la joie et du divertissement
                  à des millions de joueurs dans le monde entier. Je suis passionné par
                  ce que je fais et je suis convaincu que ma motivation et ma détermination
                  me permettront de réussir dans ce milieu passionnant.</p>
              </div>
            </div>
          </div>
          <h1 className={styles.bigtitle}>Mon CV</h1>
          <div className={styles.cv_container}>
            <div className={styles.sidebar}>
              <div className={styles.info}>
                <h1>Lucas CHARBONNIER</h1>
                <p>Programmeur de jeux vidéo | 20 ans</p>
                <p>Permis B, véhiculé</p>
                <p>06.18.76.66.43 | <a href="mailto:Lucas.charbonnier43@gmail.com">Lucas.charbonnier43@gmail.com</a></p>
                <a href="https://github.com/lucaswagames">https://github.com/lucaswagames</a>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>FORMATION</h2>
                <p>BAC GENERAL (NSI - MATHEMATIQUE - PHYSIQUE CHIMIE) | La Chartreuse Paradis 43</p>
                <p>2021-en cours BUT Informatique Graphique | IUT Puy-en-Velay (43)</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>COORDONNÉES</h2>
                <p>20 rue Charles VII, Le Puy-en-Velay, Haute-Loire</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>CENTRES D’INTÉRÊT</h2>
                <ul>
                  <li>Joueur de Rogue-like, notamment « Enter the Gungeon »</li>
                  <li>Lecteur de Manhwa, J’adore « Solo Leveling »</li>
                  <li>Joueur de jeux de survie, « ARK survival evolved », oui juste parce qu’il y a des dinosaures</li>
                </ul>
              </div>
            </div>
            <div className={styles.mainContent}>

              <div className={styles.section}>
                <h2 className={styles.title}>PROFIL</h2>
                <p>Ma passion réside dans le développement de fonctionnalités innovantes, précises et optimisées, visant toujours à offrir une expérience inégalée au joueur. Motivé par les défis, je persévère face aux problèmes jusqu'à parvenir à une solution fluide et intuitive, que ce soit sur manette, clavier ou via un casque de réalité virtuelle. Profondément convaincu que la VR représente l'avenir de l'immersion vidéoludique.</p>
              </div>
              <div className={styles.section}>
                <h2 className={styles.title}>COMPÉTENCES</h2>
                <p><strong>Informatiques:</strong> C++ - C# - C -Python - SQL</p>
                <p><strong>Linguistiques:</strong> Anglais C1</p>
                <p><strong>Moteur de jeux:</strong> Unity - Unreal</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>EXPÉRIENCE PROFESSIONNELLE</h2>
                <p><strong>2020 – aujourd'hui:</strong> HÔTE DE CAISSE SUR MARCHÉ, Haute-Loire</p>
                <p>Enregistrement et encaissement d’article - Accueil client - Écoute client - Conseil client</p>
                <p><strong>Av. à Juin 2023:</strong> DEVELOPPER SOFTWARE, EcaptureDetech, Badajoz (Espagne)</p>
                <p>Création d’outil pour interagir dans un environnement 3D - Amélioration d'outils existants - Correction de bugs - Tests sur le logiciel</p>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>PROJETS</h2>
                <ul>
                  <li><strong>Janvier 2022:</strong> Jeux de plateforme, The Red Knight</li>
                  <li><strong>Juin 2022:</strong> Jeux Roguelike, Five Guys</li>
                  <li><strong>Janvier 2023 – Avril 2023:</strong> Simulation VR d’avion de chasse, Normandie-Niémen : L'envolée historique</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2 className={styles.title}>QUALITÉS HUMAINES</h2>
                <ul>
                  <li>Écoute</li>
                  <li>Esprit d’équipe</li>
                  <li>Autonomie</li>
                  <li>Capacité d’adaptation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


//export default About;
