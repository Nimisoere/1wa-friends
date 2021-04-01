import React from 'react';
import { HiOutlineArrowNarrowLeft, HiCheck } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import { FormSteps } from '../shippingform.utils';

import styles from './Progressbar.module.scss';

interface Props {
  steps: FormSteps[];
  activeStep: string;
  hasBackButton?: boolean;
  done?: string[];
}

export const Progressbar: React.FC<Props> = ({
  steps,
  activeStep,
  hasBackButton,
  done,
}) => {
  const history = useHistory();
  return (
    <div
      className={`
        lg:py-16" : ""
      } w-full flex flex-wrap text-center`}
    >
      {hasBackButton && (
        <button
          type="button"
          className="mb-10 lg:mb-0"
          onClick={() => history.go(-1)}
        >
          <HiOutlineArrowNarrowLeft className="inline-flex text-2xl" />
        </button>
      )}
      <div className="flex-grow flex justify-center">
        <div className="flex">
          {steps.map((step) => (
            <div
              className={`flex flex-wrap justify-center items-center ${
                styles.progressItem
              } ${
                activeStep === step.name || done?.includes(step.name)
                  ? styles.active
                  : ''
              }`}
              key={step.name}
            >
              <div
                className={`w-7 h-7 z-10 rounded-full border  flex justify-center items-center text-xs ${
                  activeStep === step.name || done?.includes(step.name)
                    ? 'bg-black border-black text-white font-normal'
                    : 'bg-white border-gray-300 text-gray-300 font-bold'
                }`}
              >
                {done?.includes(step.name) ? <HiCheck /> : step.caption}
              </div>
              <p
                className={`text-sm w-full ${
                  activeStep === step.name || done?.includes(step.name)
                    ? 'text-black'
                    : 'text-gray-300'
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
