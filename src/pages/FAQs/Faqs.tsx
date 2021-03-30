import React from 'react';
import { PropsFromRedux } from '.';
import TextInput from '../../components/form-controls/TextInput';
import Seo from '../../components/Seo/Seo';
import styles from './FAQs.module.scss';
import FAQComponent from '../../components/FAQs';

interface Props extends PropsFromRedux {}

const FAQs: React.FC<Props> = (props) => (
  <div className="w-full">
    <Seo title="Frequently Asked Questions" description="" />
    <div className={styles.faqs_search_wrapper}>
      <div className="container mx-auto flex flex-col justify-center items-center py-20">
        <h1 className="font-bold mb-5 text-4xl">Frequently Asked Questions</h1>
        <div className="border bg-white px-4 py-1 h-12 flex w-full max-w-lg items-stretch rounded-lg border-gray-400">
          <div className="flex-grow flex justify-start items-stretch">
            <TextInput
              name="search-faq"
              className="border-none rounded-none px-2 py-0 w-full h-full"
              id="faq-search"
              wrapperClassName="w-full"
              placeholder="Type your question here"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary flex justify-between items-center rounded-xl px-6 text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div className="container">
      <FAQComponent />
    </div>
  </div>
);

export default FAQs;
