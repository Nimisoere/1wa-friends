import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import { useHistory } from 'react-router';

import { FiCheckCircle } from 'react-icons/fi';
import React from 'react';
import { MdClose } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { ModalAction, ModalState } from '../../../interfaces';

interface Props {
  hideModal: ActionCreatorWithoutPayload<string>;
  showModal: ActionCreatorWithPayload<ModalAction, string>;
  modal: ModalState;
}

const Confirmation: React.FC<Props> = ({ hideModal, showModal, modal }) => {
  const history = useHistory();
  const share = () => {
    hideModal();
    history.push('/overseas-shipping');
  };
  return (
    <div className="w-full px-4 bg-white rounded-md lg:px-14 py-10 relative">
      <MdClose
        className="sticky sm:absolute cursor-pointer text-2xl top-0 left-full sm:left-auto sm:right-5 sm:top-5"
        onClick={() => {
          hideModal();
        }}
      />
      <h4 className="text-center text-2xl mb-5 font-bold">
        Item registration Completed
      </h4>
      <div className="w-full flex justify-center items-center">
        <FiCheckCircle
          className="text-green-600"
          style={{ fontSize: '120px' }}
        />
      </div>
      <div className="w-full max-w-lg mx-auto py-8">
        <p className="text-center mb-5 text-gray-700 font-medium">
          Your shipment registration with transaction ID REQ-100190004 was
          successful.
        </p>
        <p className="text-gray-400 italic mb-5">
          You should receive an email from us shortly containing a summary of
          your overseas shipping request
        </p>
      </div>
      <div className="bg-black p-4 mb-10 max-w-md mx-auto text-sm text-white opacity-80 rounded-2xl">
        <p className="italic ">Hello Michael</p>
        <p>
          Please share the GIGgo app with your social circle to ease their
          pick-up and delivery needs
        </p>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="button"
          onClick={share}
          className="mb-5 text-white bg-black text-sm py-4 px-8 flex justify-center items-center rounded-3xl"
        >
          <IoShareSocialOutline className="mr-2 text-xl" />
          Share Now
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
