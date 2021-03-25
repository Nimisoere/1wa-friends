import * as React from 'react';
import { FaLock } from 'react-icons/fa';

interface INoAccessProps {
  allowedPermissions: string[];
}

const NoAccess: React.FC<INoAccessProps> = () => (
  <div className="container flex justify-center items-center">
    <div>
      <h4 className="text-center text-primary">
        You do not have access to the requested page
      </h4>
      <p className="text-center">
        <FaLock className="text-gray-400 text-6xl" />
      </p>
      <p className="font-bold text-center">
        Please contact your administrator for more details
      </p>
    </div>
  </div>
);

export default NoAccess;
