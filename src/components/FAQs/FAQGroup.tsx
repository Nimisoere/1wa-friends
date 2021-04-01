import React from 'react';
import { PropsFromRedux } from '.';
import { FAQData } from './faq-data';
import QuestionAnswer from './QuestionAnswer';

interface Props extends PropsFromRedux {
  title: string;
  data: FAQData[];
}

const FAQGroup: React.FC<Props> = ({ title, data }) => (
  <div className="w-full text-gray-900 flex flex-wrap justify-between mb-10">
    <div className="w-full md:w-1/6">
      <span className="font-semibold text-2xl">{title}</span>
    </div>
    <div className="w-full md:w-4/6">
      {data.map((faq) => (
        <QuestionAnswer key={faq.id} faq={faq} />
      ))}
    </div>
  </div>
);

export default FAQGroup;
