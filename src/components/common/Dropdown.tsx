import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useComponentVisible } from '../../hooks/useComponentVisible';

interface Props {
  toggleContent?: (isComponentVisible: boolean) => React.ReactElement | string;
  buttonClassName?: string;
  hideCaret?: boolean;
}

const Dropdown: React.FC<Props> = ({
  children,
  buttonClassName,
  toggleContent,
  hideCaret,
}) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Dropdown"
        className={
          buttonClassName ||
          'p-2 flex items-center dark:hover:text-gray-800 hover:bg-gray-50 rounded'
        }
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {toggleContent && toggleContent(isComponentVisible)}
        {!hideCaret && <FaCaretDown className="ml-2" />}
      </button>
      {isComponentVisible ? (
        <div className="absolute dark:border-gray-800 border-gray-100 border text-left right-0 top-full shadow-sm z-10 rounded w-auto dark:bg-gray-800 bg-white">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
