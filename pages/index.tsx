

import Head from 'next/head';
import Image from 'next/image';
import Header from './components/Header';
import styles from '../styles/layout.module.css';

import Photo_professionel from '../ressources/Photo_professionel.jpg'
import { useEffect, useState } from 'react';


export default function About() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>A propos de moi - Mon Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>A propos de moi</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.maxence} >
              <span><Image src={Photo_professionel} alt="My image" width={1000} height={500} /></span>
              <div>
                <h2>Lucas Charbonnier</h2>
                <p>En tant qu'étudiant en informatique graphique et passionné de jeux vidéo
                  depuis mon plus jeune âge, je suis convaincu que je suis sur la bonne voie
                  pour réaliser mon rêve de devenir programmeur de jeux vidéo. J'ai toujours
                  été fasciné par les jeux vidéo et les mondes fantastiques qu'ils créent,
                  et je suis convaincu que je peux apporter ma contribution à cette industrie
                  en constante évolution. J'ai acquis une solide expérience en utilisant des
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

          <div className={styles.pdf}>
            <h1 style={{ color: 'black', marginTop: '0px', marginBottom: '60px' }}>Mon CV</h1>
            <object
              data="/CV.pdf"
              type="application/pdf"
              width="1000"
              height={height}
            >
              <p>
                It appears your browser does not support PDFs. Please download the PDF
                to view it: <a href="/CV.pdf">Download PDF</a>
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  );
}


//export default About;
