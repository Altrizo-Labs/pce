import React from 'react';
import styles from './InfiniteMovingText.module.css';

const InfiniteMovingText: React.FC = () => {
  const companyName = "PROJECTS COST ENGINEERING (PVT) LTD";
  const service1 = "Cost Control and Monitoring";
  const service2 = "Value Engineering";
  const fullText = `${companyName} • ${service1} • ${service2}`;

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        <span className={styles.marqueeText}>{fullText}</span>
        <span className={styles.marqueeText} aria-hidden="true">{fullText}</span> {/* Duplicate for seamless scroll */}
      </div>
    </div>
  );
};

export default InfiniteMovingText;
