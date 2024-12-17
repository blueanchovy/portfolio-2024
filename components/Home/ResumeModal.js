import React, { useCallback, useEffect, useRef } from 'react';
import styles from '../../styles/components/Home/ResumeModal.module.css';
// import useDevice from '../../utils/hooks/useDevice';
import useOnClickOutside from '../../utils/hooks/useOnClickOutside';

const ResumeModal = ({isOpen, setIsOpen }) => {
  const dialogRef = useRef(null);
  useOnClickOutside(dialogRef, () => {
    console.log('trigger close');
    setIsOpen(false);
  });
//   const {isMobileOrSmaller} = useDevice();
 

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

//   const handleMailOptionClick = useCallback((mailProvider) => {
//     switch (mailProvider) {
//       case 'google':
//         window.open('https://mail.google.com/mail/u/0/?tf=cm&to=manishjhazyx@gmail.com', '_blank');
//         break;
     
//       default:
//         break;
//     }

//     setIsOpen(false);
//   }, [setIsOpen]);

  return (
    <>
    
      <dialog ref={dialogRef} className={styles.modal} id="resume-modal" autoFocus={false} >
      <p style={{ fontSize: '36px', cursor: 'pointer', margin: '0', float: 'right', position: 'fixed', right: '12px', top: '-2px'}} onClick={() => setIsOpen(false)}>&times;</p>
      {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vSrIhBFyPR2xUF1VBbtefdnblZ6shYI3-VKQ2vrxUUdinspqRIdirijZm6gMiwcGQ/pub?embedded=true" className={styles.iframe}></iframe> */}
      {/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQQ4x2pUiEBT6lspxO1NXoAlubzBBlyA4m3Q_YWpe--8ow4jQxlY720xVbkRXrHbPuQm6hxB2ivZkGi/pub?embedded=true" className={styles.iframe}></iframe> */}
      {/* <embed type="application/x-google-chrome-pdf" src="https://drive.google.com/file/d/1SFnyp1KNmA2smSZdmoPQ3_nfdLfcLUKW/view?usp=drive_link" width="100%" height="100%"></embed> */}
      {/* <embed type="application/x-google-chrome-pdf" src="https://docs.google.com/document/d/e/2PACX-1vQQ4x2pUiEBT6lspxO1NXoAlubzBBlyA4m3Q_YWpe--8ow4jQxlY720xVbkRXrHbPuQm6hxB2ivZkGi/pub?embedded=true" width="100%" height="100%"></embed> */}
      <iframe src="https://drive.google.com/file/d/1qfStJ0xRXM8IxSfzSLefAQXE6jegfJer/view?usp=sharing" width="100%" height="100%"></iframe>
      </dialog>
    </>
  );
};

export default ResumeModal;
