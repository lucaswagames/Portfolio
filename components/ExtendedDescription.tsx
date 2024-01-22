
import React from 'react';
import styles from '../styles/ExtendedDescription.module.css';

type Section = {
    title: string;
    text: string;
};

const ExtendedDescription = ({ sections }: { sections: Section[] }) => {
  return (
    <div className={styles.extendedDescription}>
      {sections.map((section, index) => ( // 'section' and 'index' are inferred as any
        <p key={index}>
          <strong>{section.title}:</strong> {section.text}
        </p>
      ))}
    </div>
  );
};

export default ExtendedDescription;
