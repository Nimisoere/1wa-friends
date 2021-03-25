import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useComponentVisible } from '../../hooks/useComponentVisible';
import './Dropdown.modules.scss';

interface Props {
  children: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ children }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  return (
    <div ref={ref} className="w-full text-right relative">
      <button
        type="button"
        className="p-2 hover:bg-gray-200 rounded"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <FaCaretDown />
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
