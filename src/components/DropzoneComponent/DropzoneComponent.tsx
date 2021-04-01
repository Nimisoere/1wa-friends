import React from 'react';
import { MdClose } from 'react-icons/md';
import { ReactComponent as CloudUpload } from '../../assets/icons/cloud-upload.svg';
import { DropZoneComponentProps } from '../form-controls/FileUpload';

export const DropZoneComponent: React.FC<DropZoneComponentProps> = ({
  files,
  deleteFile,
}) => (
  <div className="border border-dashed rounded-lg border-gray-300 w-full h-44 flex flex-col justify-center items-center">
    {files.length ? (
      <div className="flex w-full flex-wrap justify-start gap-5 items-start p-2">
        {files?.map((file) => (
          <div key={file.id} className="w-1/4 relative">
            <button onClick={(e) => deleteFile(e, file.id)} type="button">
              <MdClose className="absolute cursor-pointer right-0 top-0" />
            </button>
            <img
              src={file.preview}
              key={file.preview}
              alt=""
              className="max-h-32"
            />
          </div>
        ))}
      </div>
    ) : (
      <>
        <div className="mb-6">
          <CloudUpload />
        </div>
        <p className="text-xs text-secondary">Upload an image of the item</p>
        <button
          type="button"
          className="text-gray-300 font-medium border-gray-300 border rounded px-5 py-2 my-4 text-sm"
        >
          Choose file
        </button>
      </>
    )}
  </div>
);
