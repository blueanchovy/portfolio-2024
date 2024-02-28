import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import DefaultLayout from '../layouts/DefaultLayout';
import { projects } from '../utils/hooks/projectData';
import GithubIcon from '../components/icons/GithubIcon';
import LinkedinIcon from '../components/icons/LinkedinIcon';
import ChatIcon from '../components/icons/ChatIcon';
import ResumeModal from '../components/Home/ResumeModal';
import DocIcon from '../components/icons/DocIcon';
import useDevice from '../utils/hooks/useDevice';

export default function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cardRefs = Array.from({ length: projects.length }, () => useRef(null)); 
  const {isMobileOrSmaller} = useDevice()
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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
        <div className={styles.flexCol} style={{ fontSize: '1.1rem', alignItems: 'center', justifyContent: 'center' }}>
          <a href="https://github.com/blueanchovy" target="_blank" rel="noopener noreferrer" title="Check out my Github">
            Github <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/manishkumarjha-1337" target="_blank" rel="noopener noreferrer" title="Connect with me on Linkedin">
            Linkedin <LinkedinIcon />
          </a>
          <a href="https://wa.me/9071675221" target="_blank" rel="noopener noreferrer" title="Message me on Whatsapp">
            Whatsapp <ChatIcon />
          </a>
          <div title="See my Resumé" onClick={isMobileOrSmaller ? () => window.location.href = 'https://drive.google.com/file/d/1IxLnnIX9P9ypGEAwwRP02c0VoTo_HDRE/view?usp=sharing': () => setIsResumeOpen(!isResumeOpen) }>
            Resume <DocIcon />
          </div>
        </div>
        <div className={styles.genButtons}>
          <button className={styles.codeButton}>
            <a href="#projects" className={styles.links}>
              View Projects
            </a>
          </button>
          {/* <button className={styles.liveButton}>
            <a href="#experience" className={styles.links}>
              View Experience
            </a>
          </button> */}
          <button className={styles.liveButton}>
            <a href="https://stayvista.com" target="_blank" rel="noopener noreferrer" className={styles.links}>
              See Work
            </a>
          </button>
        </div>
        <section className={styles.projects} id="projects">
        <h2>Projects</h2>
        <div className={styles.grid}>
        {projects.map((data, index) => {
          const isNetlify = (data.liveLink).includes('netlify');
              return <>
              <div className={styles.card} ref={cardRefs[index]} key={index}>
            
            {/* <Image src="/project1.png" alt="Project 1" width={300} height={200} /> */}
            <h3>{data?.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: data.description.replace(/Tech/g, '<br />Tech') }}></p>
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
        {isResumeOpen && <ResumeModal  isOpen={isResumeOpen} setIsOpen={setIsResumeOpen}/> }
      </main>
      </DefaultLayout>
    </div>
  );
}

