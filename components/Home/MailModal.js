import React, { useCallback, useEffect, useRef } from 'react';
import styles from '../../styles/components/Home/MailModal.module.css';
import useDevice from '../../utils/hooks/useDevice';

const MailModal = ({ isOpen, setIsOpen }) => {
  const dialogRef = useRef(null);
  const {isMobileOrSmaller} = useDevice();


  // const handleClickOutside = useCallback((event) => {
  //   if (event.target.id !== 'email-modal') {
  //     dialogRef.current.close();
  //     setIsOpen(false);
  //   }
  // }, [setIsOpen]);

  useEffect(() => {
    console.log(isOpen);
    // const handleOutsideClick = (event) => handleClickOutside(event);

    if (isOpen) {
      console.log('enter');
      console.log(dialogRef.current)
      if (dialogRef.current) {
        console.log('3');
        dialogRef.current.showModal();
      }
    } else {
        if (dialogRef.current) {
            dialogRef.current.close();
          }
    }

    // document.addEventListener('click', handleOutsideClick);

    // return () => {
    //   document.removeEventListener('click', handleOutsideClick);
    // };
  }, [isOpen]);

  const handleMailOptionClick = useCallback((mailProvider) => {
    switch (mailProvider) {
      case 'google':
        window.open('https://mail.google.com/mail/u/0/?tf=cm&to=manishjhazyx@gmail.com', '_blank');
        break;
     
      default:
        break;
    }

    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <>
      <dialog ref={dialogRef} className={styles.modal} id="email-modal">
        <ul className={styles.mailOptions}>
          <li onClick={() => handleMailOptionClick('google')}>
            {isMobileOrSmaller ? (<a href="mailto:manishjhazyx@gmail.com">Gmail</a>): (<span>Gmail</span>)}</li>
     
        </ul>
      </dialog>
    </>
  );
};

export default MailModal;
