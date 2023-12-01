import React, { useCallback, useEffect, useRef } from 'react';
import styles from '../../styles/components/Home/MailModal.module.css';
import useDevice from '../../utils/hooks/useDevice';
import useOnClickOutside from '../../utils/hooks/useOnClickOutside';

const MailModal = ({isOpen, setIsOpen }) => {
  const dialogRef = useRef(null);
  useOnClickOutside(dialogRef, () => {
    setIsOpen(false);
  });
  console.log(dialogRef);
  const {isMobileOrSmaller} = useDevice();
 

  useEffect(() => {
    console.log(isOpen);

    if (isOpen) {
      console.log(dialogRef.current)
      if (dialogRef.current) {
        console.log('open');
        dialogRef.current.showModal();
        dialogRef.current.blur();
      }
    } else {
        if (dialogRef.current) {
          console.log('close');
            dialogRef.current.close();
          }
    }
  }, [dialogRef, isOpen]);

  const handleMailOptionClick = useCallback((mailProvider) => {
    console.log(mailProvider);
    switch (mailProvider) {
      case 'google':
        console.log('open');
        window.open('https://mail.google.com/mail/u/0/?tf=cm&to=manishjhazyx@gmail.com', '_blank');
        break;
     
      default:
        break;
    }

    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <>
      <dialog ref={dialogRef} className={styles.modal} id="email-modal" >
        <ul className={styles.mailOptions}>
          <li onClick={() => handleMailOptionClick('google')}>
            {/* {isMobileOrSmaller ? (<a href="mailto:manishjhazyx@gmail.com">Gmail</a>): (<span>Gmail</span>)}</li> */}
            <span>Gmail</span>
            </li>
        </ul>
      </dialog>
    </>
  );
};

export default MailModal;
