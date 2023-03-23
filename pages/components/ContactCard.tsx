import Image from 'next/image';
import styles from '../../styles/layout.module.css';

type ContactCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ContactCard({image, title, description, link}: ContactCardProps) {
  return (
    <div className={styles.contactItem}
    onClick={() => window.open(link)}>
      <Image 
        src={image}
        alt="Image"
        width={100}
        height={100}
        className={styles.contactImage}
      />
      <div>
        <h2> {title} </h2>
        <p> {description} </p>
      </div>
    </div>
    );
}
