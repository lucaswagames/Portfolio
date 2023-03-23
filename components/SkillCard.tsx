import Image from 'next/image';
import styles from '../styles/layout.module.css';


interface SkillCardProps {
  img: string;
  content: {
    name: string;
  };
}

export default function SkillCard({ img, content }: SkillCardProps) {
  return (
    <>
      <div className={styles.skillSolo}>
        <Image src={img} alt="Picture of the skill" width={60} height={60} />
        <h2>{content.name}</h2>
      </div>
    </>
  );
}
