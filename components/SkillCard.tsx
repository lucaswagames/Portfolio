import Image from 'next/image';
import styles from '../styles/layout.module.css';
import Link from 'next/link';


interface SkillCardProps {
  img: string;
  content: {
    name: string;
  };
  href?: string; // Ceci rend la propriété href optionnelle
}


export default function SkillCard({ img, content, href = "#" }: SkillCardProps) {
  return (
    <div className={styles.skillSolo}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={img} alt={`Logo de ${content.name}`} width={60} height={60} />
        <h2>{content.name}</h2>
      </a>
    </div>
  );
}



