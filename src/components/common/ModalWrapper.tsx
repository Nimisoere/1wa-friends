import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router';

interface Props {
  redirectOnClose?: string;
  hideCloseButton?: boolean;
  hideModal: ActionCreatorWithoutPayload<string>;
}

const ModalWrapper: React.FC<Props> = ({
  children,
  redirectOnClose,
  hideModal,
  hideCloseButton,
}) => {
  const history = useHistory();

  return (
    <div className="w-full px-4 bg-gray-100 lg:px-14 py-10 relative">
      {!hideCloseButton && (
        <MdClose
          className="sticky sm:absolute cursor-pointer text-2xl top-0 left-full sm:left-auto sm:right-5 sm:top-5"
          onClick={() => {
            redirectOnClose && history.push(redirectOnClose);
            hideModal();
          }}
        />
      )}

      {children}
    </div>
  );
};

export default ModalWrapper;
