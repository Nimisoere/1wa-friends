import React from "react";
import { useDropzone, DropzoneProps, DropzoneState } from "react-dropzone";
import { uid } from "uid";
import { Datum } from "../../interfaces";

interface DropZoneFile extends Blob {
  preview: string;
  id: string;
}

interface DropZoneFileData {
  file: ArrayBuffer;
  id: string;
}

export interface DropZoneComponentProps extends DropzoneState {
  files: DropZoneFile[];
  deleteFile: (e: React.MouseEvent<HTMLButtonElement>, fileId: string) => void;
}

interface Props extends DropzoneProps {
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  helperText?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customChange?: Function;
  error?: Datum;
  DropZoneComponent: React.FC<DropZoneComponentProps>;
}

const FileUpload: React.FC<Props> = ({
  wrapperClassName,
  labelClassName,
  label,
  id,
  value: valueProps,
  helperText,
  name,
  customChange,
  disabled,
  className,
  error,
  onChange,
  DropZoneComponent,
  multiple,
  ...props
}) => {
  const [files, setFiles] = React.useState<DropZoneFile[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [fileData, setFileData] = React.useState<DropZoneFileData[]>([]);

  const onDrop = React.useCallback(
    (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles?.length) {
        const newErrors = rejectedFiles[0]?.errors[0]?.map(
          (err: Error) => err?.message
        );
        setErrors([...newErrors, ...errors]);
      } else {
        const fileId = uid(8);
        const newFiles = acceptedFiles.map((file: any) => ({
          ...file,
          id: fileId,
          preview: URL.createObjectURL(file),
        }));
        setFiles([...newFiles, ...files]);
        customChange && customChange([...newFiles, ...files]);
        acceptedFiles.forEach((file: Blob) => {
          const reader = new FileReader();
          reader.onabort = () => console.log("file reading was aborted");
          reader.onerror = () => console.log("file reading has failed");
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            const newFileData: DropZoneFileData = {
              file: reader.result as ArrayBuffer,
              id: fileId,
            };
            const fileDataFiles = fileData.map((fileDatum) => fileDatum.file);
            if (newFileData) {
              setFileData([newFileData, ...fileData]);
              !!customChange &&
                customChange([newFileData.file, ...fileDataFiles]);
            }
          };
        });
      }
    },
    [customChange, errors, fileData, files]
  );

  const zoneState = useDropzone({
    onDrop,
    ...props,
  });

  const deleteFile = (
    e: React.MouseEvent<HTMLButtonElement>,
    fileId: string
  ) => {
    e.stopPropagation();
    const newFiles = files.filter((file) => file.id !== fileId);
    const newFileData = fileData.filter((file) => file.id !== fileId);
    setFiles(newFiles);
    setFileData(newFileData);
    const fileDataFiles = fileData.map((fileDatum) => fileDatum.file);

    !!customChange && customChange([...fileDataFiles]);
  };

  const { getInputProps, getRootProps } = zoneState;

  return (
    <div className={wrapperClassName}>
      {!!label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <div
        {...getRootProps({
          className,
        })}
      >
        <input {...getInputProps()} />
        <DropZoneComponent
          deleteFile={deleteFile}
          files={files}
          {...zoneState}
        />
      </div>
      {errors.map((fileInputError) => (
        <span
          className={`${
            error?.message ? "text-red-600" : "text-gray-600"
          } text-xs`}
        >
          {fileInputError}
        </span>
      ))}
      {error?.message && (
        <span
          className={`${
            error?.message ? "text-red-600" : "text-gray-600"
          } text-xs`}
        >
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default FileUpload;
