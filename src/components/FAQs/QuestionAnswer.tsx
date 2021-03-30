import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { PropsFromRedux } from '.';
import { FAQData } from './faq-data';

interface Props extends PropsFromRedux {
  faq: FAQData;
}

const QuestionAnswer: React.FC<Props> = ({ faq }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div key={faq.id}>
      <div
        role="button"
        tabIndex={0}
        onKeyPress={() => null}
        onClick={() => setOpen(!open)}
        className="flex border-b px-2 py-4 border-gray-200"
      >
        <h4 className="font-semibold flex-grow text-lg">{faq.question}</h4>
        {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      {open && (
        <p className="transform transition-all py-5 text-sm mb-10">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default QuestionAnswer;
