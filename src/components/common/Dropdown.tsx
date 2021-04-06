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
        className={
          buttonClassName || 'p-2 flex items-center hover:bg-gray-50 rounded'
        }
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        {toggleContent && toggleContent(isComponentVisible)}
        {!hideCaret && <FaCaretDown className="ml-2" />}
      </button>
      {isComponentVisible ? (
        <div className="absolute border-gray-100 border text-left right-0 top-full shadow-sm z-10 rounded bg-white w-40">
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
