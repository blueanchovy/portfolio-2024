import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const cardRefs = Array.from({ length: 3 }, () => useRef(null)); // Create an array of refs, one for each card

  useEffect(() => {
    function handleMouseMove(event, cardRef) {
      const card = cardRef.current;
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cursorX = event.clientX - cardRect.left;
      const cursorY = event.clientY - cardRect.top;

      card.style.setProperty('--cursorX', `${cursorX}px`);
      card.style.setProperty('--cursorY', `${cursorY}px`);
    }

    const mouseMoveHandler = (event, index) => handleMouseMove(event, cardRefs[index]);

    cardRefs.forEach((cardRef, index) => {
      const card = cardRef.current;
      if (!card) return;

      card.addEventListener('mousemove', (event) => mouseMoveHandler(event, index));
    });

    // Cleanup the event listeners on component unmount
    return () => {
      cardRefs.forEach((cardRef, index) => {
        const card = cardRef.current;
        if (!card) return;

        card.removeEventListener('mousemove', (event) => mouseMoveHandler(event, index));
      });
    };
  }, [cardRefs]);

  return (
    <div className={styles.container}>
      <Head>
        {/* ... your Head content remains unchanged */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Manish Kumar Jha</h1>

        <div className={styles.grid}>
          <div className={styles.card} ref={cardRefs[0]}>
          <Image src="/project1.png" alt="Project 1" width={300} height={200} />
            <h2>Project 1</h2>
            <p>Technologies used: React, JavaScript, Git</p>
            <p>Salient features: Feature 1, Feature 2, Feature 3</p>
            <div className={styles.projectLinks}>
              <a href="#">Code</a>
              <a href="#">Live</a>
            </div>
          </div>
          <div className={styles.card} ref={cardRefs[1]}>
          <Image src="/project1.png" alt="Project 1" width={300} height={200} />
            <h2>Project 1</h2>
            <p>Technologies used: React, JavaScript, Git</p>
            <p>Salient features: Feature 1, Feature 2, Feature 3</p>
            <div className={styles.projectLinks}>
              <a href="#">Code</a>
              <a href="#">Live</a>
            </div>
          </div>
          <div className={styles.card} ref={cardRefs[2]}>
          <Image src="/project1.png" alt="Project 1" width={300} height={200} />
            <h2>Project 1</h2>
            <p>Technologies used: React, JavaScript, Git</p>
            <p>Salient features: Feature 1, Feature 2, Feature 3</p>
            <div className={styles.projectLinks}>
              <a href="#">Code</a>
              <a href="#">Live</a>
            </div>
          </div>
        </div>

        <section className={styles.projects}>
          {/* Add project cards as needed */}
          <div className={styles.projectCard}>
            
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

