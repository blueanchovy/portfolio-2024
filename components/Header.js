import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Header.module.css';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import ChatIcon from './icons/ChatIcon';
import DocIcon from './icons/DocIcon';
import MailIcon from './icons/MailIcon';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className={styles.header}>
      <div className={styles.left}>
        <a href="https://github.com/blueanchovy" target="_blank" rel="noopener noreferrer" title="Check out my Github">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/manishkumarjha-1337" target="_blank" rel="noopener noreferrer" title="Connect with me on Linkedin">
          <LinkedinIcon />
        </a>
        <a href="https://wa.me/9071675221" target="_blank" rel="noopener noreferrer" title="Message me on Whatsapp">
          <ChatIcon />
        </a>
        <a href="'https://mail.google.com/mail/u/0/?tf=cm&to=manishjhazyx@gmail.com'" target="_blank" rel="noopener noreferrer" title="Email Me">
          <MailIcon />
        </a>
        
        {/* <div title="Email Me" id="email-button" onClick={() => setIsOpen(!isOpen)}><MailIcon /></div> */}
        {/* {isOpen && <MailModal isOpen={isOpen} setIsOpen={setIsOpen}/> } */}
      </div>
      <div className={styles.right}>
        <button className={styles.resumeButton}>
          <a href="https://docs.google.com/document/d/1hQd3QHt6lhNDU95SvAIeCar0llR0JPNT/edit?usp=sharing&ouid=105704779719537214793&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" title="See my Resumé">
            <DocIcon />
          </a>
        </button>
      </div>
    </header>
    
    </>
  );
};

export default Header;
