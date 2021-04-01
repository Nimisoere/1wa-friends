import React from 'react';
import { PropsFromRedux } from '.';
import { groupBy } from '../../utils/common.utils';
import { faqData } from './faq-data';
import FAQGroup from './FAQGroup';

interface Props extends PropsFromRedux {}

const FAQs: React.FC<Props> = (props) => {
  const groupedData = groupBy(faqData, 'category');
  return (
    <div className="my-10">
      {Object.keys(groupedData).map((key) => (
        <FAQGroup key={key} data={groupedData[key]} title={key} />
      ))}
    </div>
  );
};

export default FAQs;
