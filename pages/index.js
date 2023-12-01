import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../layouts/DefaultLayout';
import { projects } from '../utils/hooks/projectData';

export default function Home() {
  const cardRefs = Array.from({ length: projects.length }, () => useRef(null)); 

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
      </Head>
      <DefaultLayout>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Manish Jha</h1>
        <h1 className={styles.subtitle}>Frontend focused Software Engineer</h1>
        <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.grid}>
        {projects.map((data, index) => {
          const isNetlify = (data.liveLink).includes('netlify');
              return <>
              <div className={styles.card} ref={cardRefs[index]} key={index}>
            
            {/* <Image src="/project1.png" alt="Project 1" width={300} height={200} /> */}
            <h3>{data?.name}</h3>
            <p>{data.description}</p>
            <div className={styles.projectLinks}>
              <button className={styles.codeButton}>
                <a href={data.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.links}>
                  Code
                </a>
              </button>
              {data.liveLink ? 
                <button className={styles.liveButton}>
                <a
                  href={isNetlify ? "#projects" : data.liveLink}
                  target={isNetlify ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={styles.links}
                  style={isNetlify ? { textDecoration: 'line-through' } : {}}
                >
                  Live
                </a>
              </button>
              
                : 
                <button className={styles.liveButton} target="_blank" rel="noopener noreferrer">
                  <a href={data.demoLink} className={styles.links}>
                    Demo
                  </a>
                </button>}
            </div>
          </div>
              </>
            })}
        </div>
        </section>
      </main>
      </DefaultLayout>
    </div>
  );
}

