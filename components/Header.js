import React from 'react';
import styles from '../styles/components/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* <h1>Manish Kumar Jha</h1> */}
      </div>
      <div className={styles.right}>
        <a href="https://github.com/blueanchovy" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/manishkumarjha-1337" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://docs.google.com/document/d/1hQd3QHt6lhNDU95SvAIeCar0llR0JPNT/edit?usp=sharing&ouid=105704779719537214793&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </header>
  );
};

export default Header;
