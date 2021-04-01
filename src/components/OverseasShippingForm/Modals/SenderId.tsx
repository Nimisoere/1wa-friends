import React from 'react';
import { MdClose } from 'react-icons/md';
import { useHistory } from 'react-router';

interface Props {}

const SenderIdForm: React.FC<Props> = ({}) => {
  const history = useHistory();
  return (
    <div className="w-full px-4 bg-gray-100 lg:px-14 py-10 relative">
      <MdClose
        className="absolute cursor-pointer text-2xl right-5 top-5"
        onClick={() => {
          // hideModal();
        }}
      />
      <h4 className="text-center text-2xl mb-10 font-sans font-black">
        One more thing
      </h4>
    </div>
  );
};

export default SenderIdForm;
