import React from 'react';
import { focus } from './focus.constants';
import styles from './OurFocus.module.scss';

interface Props {}

const OurFocus: React.FC<Props> = (props) => (
  <div className="w-full">
    <h4 className="text-center font-sans mb-3 font-black text-3xl">
      Our Focus
    </h4>
    <p className="text-center text-gray-600">
      We at <strong>GIG</strong> Logistics are solution driven and ready to
      serve you better.
    </p>
    <div
      className={`${styles.cardWrapper} lg:flex-col flex-wrap flex max-w-3xl mx-auto py-16 gap-8`}
    >
      {focus.map((item, index) => (
        <div
          key={item.id}
          className={`bg-red-400 mb-5 sm:mb-0 shadow-xl rounded-3xl ${
            styles.focusCard
          } ${index > 0 ? 'lg:w-1/2' : 'lg:w-1/3'} flex flex-col p-7`}
        >
          <div className="mb-3">{item.icon}</div>
          <h4 className="font-sans font-black text-lg">{item.title}</h4>
          <p className="text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default OurFocus;
