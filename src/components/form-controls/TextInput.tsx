import React from 'react';
import { Datum } from '../../interfaces';

interface Props {
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hiddenLabel?: boolean;
  multiline?: boolean;
  helperText?: string;
  value?: any;
  rows?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customChange?: Function;
  error?: Datum;
}

const TextInput: React.FC<Props> = React.memo(
  ({
    wrapperClassName,
    labelClassName,
    label,
    id,
    placeholder,
    type,
    value: valueProps,
    helperText,
    name,
    customChange,
    disabled,
    className,
    multiline,
    error,
    onChange,
    rows,
    readOnly,
  }) => {
    const [value, setValue] = React.useState(valueProps || '');

    React.useEffect(() => {
      setValue(valueProps);
    }, [valueProps]);

    const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setValue(event.target.value);
      !!customChange && customChange(event.target.value);
    };

    return (
      <div className={wrapperClassName}>
        {!!label && (
          <label className={labelClassName} htmlFor={id}>
            {label}
          </label>
        )}
        {multiline ? (
          <textarea
            id={id}
            name={name}
            className={`${className} p-4 border border-gray-400 rounded-md  ${
              error ? 'border border-red-600' : ''
            }`}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            value={onChange ? valueProps : value}
            onChange={(onChange as any) || handleChange}
            rows={rows}
          />
        ) : (
          <input
            id={id}
            name={name}
            className={`p-4 border border-gray-400 rounded-md ${className} ${
              error ? 'border border-red-600' : ''
            }`}
            type={type || 'text'}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            value={onChange ? valueProps : value}
            onChange={onChange || handleChange}
          />
        )}
        {error?.message && (
          <span
            className={`${
              error?.message ? 'text-red-600' : 'text-gray-600'
            } text-xs`}
          >
            {error.message}
          </span>
        )}
      </div>
    );
  }
);

export default TextInput;
