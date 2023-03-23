import Head from 'next/head';
import styles from '../styles/layout.module.css';


export default function INR() {
  return (
    <div className={styles.inrPage}>
      <Head>
        <title>Institut du Numérique Responsable - Mon Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Institut du Numérique Responsable (INR)</h1>

        <p>
          L&aposInstitut du Numérique Responsable (INR) est une organisation dédiée à la promotion des bonnes pratiques pour un numérique plus respectueux de l&aposenvironnement et plus éthique envers les individus. Leur mission est de sensibiliser les professionnels, les entreprises et les particuliers aux enjeux du numérique responsable et de les aider à mettre en œuvre des solutions durables.
        </p>

        <h2 className={styles.subtitle}>MOOC Numérique Responsable</h2>

        <p>
          J&aposai suivi la formation en ligne intitulée MOOC Numérique Responsable, proposée par l&aposINR. Ce module complet de 4h30 m&aposa permis d&aposapprofondir mes connaissances sur les enjeux environnementaux et éthiques liés au numérique. La formation est composée de 14 modules incluant des capsules vidéo, des quiz interactifs, des textes et des liens complémentaires.
        </p>

        <p>
          Grâce à cette formation, j&aposai appris à adopter des approches plus responsables dans le développement de mes projets, en privilégiant des solutions éco-responsables et durables. Je suis convaincu que l&aposapplication de ces connaissances et compétences me permettra de contribuer activement à la transition vers un numérique plus respectueux de l&aposenvironnement et de la société.
        </p>

        <h2 className={styles.subtitle}>Pour en savoir plus</h2>

        <p>
          Si vous souhaitez en savoir plus sur l&aposInstitut du Numérique Responsable et ses initiatives, je vous encourage à visiter leur site officiel : <a href="https://institutnr.org" target="_blank" rel="noopener noreferrer">https://institutnr.org</a>
        </p>
      </main>
    </div>
  );
}
