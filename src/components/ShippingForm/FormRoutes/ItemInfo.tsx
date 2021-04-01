import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { getRequiredErrorMessage } from '../../../utils/common.utils';
import { Progressbar } from '../Components/Progressbar';
import { formSteps } from '../shippingform.utils';
import Select from '../../form-controls/Select';
import TextInput from '../../form-controls/TextInput';
import style from './ItemInfo.module.scss';
import FileUpload from '../../form-controls/FileUpload';
import { DropZoneComponent } from '../../DropzoneComponent/DropzoneComponent';

interface Props {}

const schema = yup.object().shape({
  category: yup.string().required(getRequiredErrorMessage('Item category')),
  item: yup.string().required(getRequiredErrorMessage('Item')),
  weight: yup.string().required(getRequiredErrorMessage('Weight')),
  quantity: yup
    .number()
    .min(1, 'Value must be a number greater than 1')
    .required(getRequiredErrorMessage('Quantity'))
    .typeError('Field must be a number'),
  value: yup
    .number()
    .min(1, 'Value must be a number greater than 1')
    .required(getRequiredErrorMessage('Item value'))
    .typeError('Field must be a number'),
  item_image: yup
    .array(yup.string())
    .required(getRequiredErrorMessage('Item image'))
    .typeError('One or more images required'),
});

interface Inputs {
  category: string;
  item: string;
  weight: string;
  quantity: string;
  value: string;
  item_image: string;
}

export const ItemInfo: React.FC<Props> = (props) => {
  const { handleSubmit, control, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = (data: Inputs) => {
    history.push('/giggo-delivery-app/34343/confirmation');
  };

  return (
    <div>
      <div className="w-full mb-5">
        <Progressbar
          done={['pick-up', 'shipment-details']}
          steps={formSteps}
          activeStep="upload-item"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-4/5 mx-auto my-5">
        <div className="shadow-lg mb-10 rounded-md">
          <h4 className="p-5 font-semibold rounded-t-md  border-b border-gray-300 text-center">
            Item's Info
          </h4>
          <div className="w-full px-5 sm:px-20 py-10">
            <div className="mb-8 w-full">
              <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <Select
                    name={name}
                    value={value}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['category']}
                    placeholder="Category"
                    labelClassName="mb-2 ml-2 flex"
                    label="Select Category"
                    customChange={onChange}
                    className="rounded-lg"
                    options={[
                      { label: 'Food', value: 'Food' },
                      { label: 'Electronics', value: 'Electronics' },
                    ]}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="item"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <Select
                    name={name}
                    value={value}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['item']}
                    placeholder="Item"
                    labelClassName="mb-2 ml-2 flex"
                    label="Select item"
                    valueKey="item"
                    labelKey="itemname"
                    customChange={onChange}
                    className="rounded-lg"
                    options={[
                      {
                        itemname: 'Blender',
                        item: 'Blender',
                        category: 'Food',
                      },
                      {
                        itemname: 'TV',
                        item: 'television',
                        category: 'Electronics',
                      },
                      {
                        itemname: 'Microwave',
                        item: 'microwave',
                        category: 'Food',
                      },
                      {
                        itemname: 'Laptop',
                        item: 'pc',
                        category: 'Electronics',
                      },
                    ]}
                  />
                )}
              />
            </div>
            <div className="mb-8 w-full">
              <Controller
                name="weight"
                control={control}
                defaultValue=""
                render={({ name, value, onChange }) => (
                  <Select
                    name={name}
                    value={value}
                    id={name}
                    wrapperClassName="w-full"
                    error={errors['weight']}
                    placeholder="weight"
                    labelClassName="mb-2 ml-2 flex"
                    label="Select weight"
                    customChange={onChange}
                    labelKey="weightrange"
                    className="rounded-lg"
                    options={[
                      {
                        weightrange: '0.0 - 2.5',
                        value: '0.0-2.5',
                      },
                      {
                        weightrange: '2.5 - 5.0',
                        value: '2.5-5.0',
                      },
                      {
                        weightrange: '5.0 - 10.0',
                        value: '5.0-10.0',
                      },
                      {
                        weightrange: '10.0 and above',
                        value: '10+',
                      },
                    ]}
                  />
                )}
              />
            </div>

            <div className="flex flex-wrap lg:flex-nowrap w-full lg:gap-4">
              <div className="mb-8 w-full lg:w-1/2">
                <Controller
                  name="quantity"
                  control={control}
                  defaultValue=""
                  render={({ name, value, onChange }) => (
                    <TextInput
                      name={name}
                      value={value}
                      className={style.forminput}
                      id={name}
                      labelClassName="mb-2 ml-2 flex"
                      label="Quantity"
                      type="number"
                      wrapperClassName="w-full"
                      error={errors['quantity']}
                      placeholder="Quantity"
                      customChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="mb-8 w-full lg:w-1/2">
                <Controller
                  name="value"
                  control={control}
                  defaultValue=""
                  render={({ name, value, onChange }) => (
                    <TextInput
                      name={name}
                      value={value}
                      id={name}
                      className={style.forminput}
                      type="number"
                      labelClassName="mb-2 ml-2 flex"
                      label="Value"
                      wrapperClassName="w-full"
                      error={errors['value']}
                      placeholder="Value"
                      customChange={onChange}
                    />
                  )}
                />
              </div>
            </div>

            <div className="w-full flex">
              <Controller
                name="item_image"
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
                    multiple
                    value={value}
                    customChange={onChange}
                    error={errors['item_image']}
                    accept="image/*"
                    DropZoneComponent={DropZoneComponent}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-12">
          <button
            type="button"
            onClick={() => history.go(-1)}
            className="border border-secondary text-secondary py-3 px-14 font-bold text-lg rounded"
          >
            Back
          </button>
          <button
            type="submit"
            className="border border-secondary bg-secondary text-white py-3 px-14 font-bold text-lg rounded"
          >
            Finsh
          </button>
        </div>
      </form>
    </div>
  );
};
