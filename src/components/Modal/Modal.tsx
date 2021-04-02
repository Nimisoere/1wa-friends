import React from 'react';
import ReactModal from 'react-modal';
import { PropsFromRedux } from '.';
import { useScreenSize } from '../../hooks/useScreenSize';

interface Props extends PropsFromRedux {}

const Modal: React.FC<Props> = ({ modal, hide }) => {
  const screenSize = useScreenSize();
  const isSmallScreen = screenSize < 640;

  React.useEffect(
    () => () => {
      hide();
    },
    [hide]
  );
  return (
    <ReactModal
      bodyOpenClassName="overflow-hidden"
      style={{
        overlay: {
          position: 'fixed',
          zIndex: 99999,
          display: 'flex',
          justifyContent: isSmallScreen ? 'flex-start' : 'center',
          alignItems: isSmallScreen ? 'flex-end' : 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
          ...modal.modalProps.style?.overlay,
        },
        content: {
          maxWidth: isSmallScreen ? 'none' : '800px',
          position: 'relative',
          height: 'auto',
          width: isSmallScreen ? '100%' : 'auto',
          padding: 0,
          inset: 'auto',
          border: 'none',
          backgroundColor: 'transparent',
          maxHeight: '80%',
        },
      }}
      {...modal.modalProps}
    >
      {modal?.component}
    </ReactModal>
  );
};

export default Modal;
