import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Image from 'next/image';

import ContactCard from '../components/ContactCard';

import img_github from '../ressources/Github.svg'
import img_mail from '../ressources/Mail.svg'
import img_linkdin from '../ressources/Linkdin.svg'


const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>
      <main className={styles.contact}>
        <h1>Contactez-moi</h1>
        <div className={styles.contactContainer}>
          <ContactCard
            title="GitHub"
            description="Retrouvez-moi sur GitHub pour voir mes projets open source."
            image={img_github}
            link="https://github.com/lucaswagames"
          />
          <ContactCard
            title="LinkedIn"
            description="Retrouvez-moi sur LinkedIn pour en savoir plus sur mon parcours professionnel."
            image={img_linkdin}
            link="https://www.linkedin.com/in/lucas-charbonnier/"
          />
          <ContactCard
            title="Mail"
            description="Contactez-moi directement par email à l'adresse suivante : lucas.charbonnier43@gmail.com"
            image={img_mail}
            link="mailto:lucas.charbonnier43@gmail.com"
          />
        </div>
      </main>
    </>
  );
};

export default Contact;
