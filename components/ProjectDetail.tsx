import React from 'react';
import styles from '../styles/ProjectDetail.module.css';

interface ProjectDetailProps {
  projectData: {
    title: string;
    video: string;
    goal?: string;
    techno?: string;
    projectType?: string;
    description?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectData }) => {
  const goal = projectData.goal ?? 'Goal information not provided.';
  const description = projectData.description ?? 'Description information not provided.';
  const techno = projectData.techno ?? 'Technologies not specified.';
  const projectType = projectData.projectType ?? 'Project type not specified.';

  return (
    <main className={styles.projectDetail}>
      <h1 className={styles.projectTitle}>{projectData.title}</h1>
      <div className={styles.projectVideo}>
        <video controls className={styles.videoPlayer}>
          <source src={projectData.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.projectContent}>
        <p><strong>Goal:</strong> {goal}</p>
        <p><strong>Technologies Used:</strong> {techno}</p>
        <p><strong>Project Type:</strong> {projectType}</p>
        <p><strong>Description:</strong> {description}</p>
      </div>
    </main>
  );
};

export default ProjectDetail;
