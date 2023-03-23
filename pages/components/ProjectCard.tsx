import Image from 'next/image';
import styles from '../../styles/layout.module.css';

interface ProjectCardProps {
  video: string;
  title: string;
  content: {
    goal: string;
    description: string;
    techno: string;
    projectType: string;
  };
}

export default function ProjectCard({ video, title, content }: ProjectCardProps) {
    return (
        <>
            <video src={video} controls width="500">
                Your browser does not support the video tag.
            </video>
            <div className={styles.projectTexte}>
                <h2>{title}</h2>
                <p> <b><u>But</u> : </b> {content.goal}</p>
                <p> <b><u>Description</u> : </b>{content.description}</p>
                <p> <b><u>Technologies</u> : </b>{content.techno}</p>
                <p><b><u>Type de projet</u> : </b>{content.projectType}</p>
            </div>

        </>
    );
}
