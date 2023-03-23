import Image from 'next/image';
import styles from '../../styles/layout.module.css';

interface ProjectCardProps {
    img: string;
    content: {
      name: string;
    };
  }
  

  export default function ProjectCard({ img, content }: ProjectCardProps) {
    return (
        <>
            <div className={styles.skillSolo}>
                <Image src={img} alt="Picture of the skill" width={60} height={60} />
                <h2>{content.name}</h2>
            </div>
        </>
    );
}
