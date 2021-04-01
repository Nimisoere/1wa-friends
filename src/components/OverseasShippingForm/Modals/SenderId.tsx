import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { MdClose } from 'react-icons/md';
import * as yup from 'yup';
import { ModalAction, ModalState } from '../../../interfaces';
import { getRequiredErrorMessage } from '../../../utils/common.utils';
import Select from '../../form-controls/Select';
import TextInput from '../../form-controls/TextInput';
import FileUpload from '../../form-controls/FileUpload';
import { DropZoneComponent } from '../../DropzoneComponent/DropzoneComponent';
import Confirmation from './Confirmation';

interface Props {
  hideModal: ActionCreatorWithoutPayload<string>;
  showModal: ActionCreatorWithPayload<ModalAction, string>;
  modal: ModalState;
}

const schema = yup.object().shape({
  id_type: yup
    .string()
    .required(getRequiredErrorMessage('Mode of Identification')),
  id_number: yup
    .string()
    .required(getRequiredErrorMessage('Identification number')),

  uploaded_id: yup.array(yup.string()).typeError('One or more images required'),
});

interface Inputs {
  id_type: string;
  id_number: string;
  uploaded_id: string;
}

const SenderIdForm: React.FC<Props> = ({ hideModal, showModal, modal }) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    showModal({
      modalProps: {},
      component: (
        <Confirmation
          hideModal={hideModal}
          showModal={showModal}
          modal={modal}
        />
      ),
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-4 bg-white rounded-md lg:px-14 py-10 relative"
    >
      <MdClose
        className="absolute cursor-pointer text-2xl right-5 top-5"
        onClick={() => {
          hideModal();
        }}
      />
      <h4 className="text-center text-2xl mb-5 font-bold">One more thing</h4>
      <div className="w-full max-w-lg mx-auto">
        <p className="text-center mb-2 font-semibold text-xl">
          The security of your item(s) and fraud prevention is important to GIG
          Logistics.
        </p>
        <p className="text-center font-medium">
          Please click on the drop down below to select and upload a form of
          identification to further guarantee the security of your item.
        </p>
      </div>
      <div className="w-full mx-auto max-w-md py-10">
        <div className="mb-8 w-full">
          <Controller
            name="id_type"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <Select
                name={name}
                value={value}
                id={name}
                wrapperClassName="w-full"
                error={errors['id_type']}
                placeholder="Mode of Identification"
                labelClassName="mb-2 ml-2 flex"
                customChange={onChange}
                className="rounded-lg"
                options={[
                  { label: 'Home Delivery', value: 'homedelivery' },
                  { label: 'Terminal Pickup', value: 'pickup' },
                ]}
              />
            )}
          />
        </div>
        <div className="mb-5 w-full">
          <Controller
            name="id_number"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <TextInput
                name={name}
                value={value}
                className="forminput"
                id={name}
                wrapperClassName="w-full"
                error={errors['id_number']}
                placeholder="Identification number"
                labelClassName="mb-2 ml-2 flex"
                customChange={onChange}
              />
            )}
          />
        </div>
        <div className="w-full flex">
          <Controller
            name="uploaded_id"
            control={control}
            defaultValue=""
            render={({ name, value, onChange }) => (
              <FileUpload
                wrapperClassName="w-full"
                labelClassName="mb-2 ml-1 flex"
                label="Upload item"
                name={name}
                id={name}
                maxFiles={5}
                value={value}
                customChange={onChange}
                error={errors['uploaded_id']}
                accept="image/*"
                DropZoneComponent={DropZoneComponent}
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          type="submit"
          className="mb-5 text-white bg-secondary font-bold py-2 w-full max-w-xs rounded"
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default SenderIdForm;
