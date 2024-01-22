import React from 'react';
import styles from '../styles/layout.module.css';

interface ProjectCardProps {
  video: string;
  title: string;
  detailsUrl: string;
  content: {
    goal?: string;
    description?: string;
    techno?: string;
    projectType?: string;
  };
}

export default function ProjectCard({ video, title, content, detailsUrl }: ProjectCardProps) {
  const goal = content.goal ?? '';
  const description = content.description ?? '';
  const techno = content.techno ?? '';
  const projectType = content.projectType ?? '';

  return (
    <>
      <video src={video} controls width="500">
        Your browser does not support the video tag.
      </video>
      <div className={styles.projectTexte}>
        <h2>{title}</h2>
        <p><b><u>But</u>:</b> {goal}</p>
        <p><b><u>Description</u>:</b> {description}</p>
        <p><b><u>Technologies</u>:</b> {techno}</p>
        <p><b><u>Type de projet</u>:</b> {projectType}</p>
        <a href={detailsUrl} rel="noopener noreferrer">View Project Details</a>
      </div>
    </>
  );
}
