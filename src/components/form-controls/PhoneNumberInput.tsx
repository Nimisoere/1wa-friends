import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Datum } from '../../interfaces';
import './phoneinput.scss';

interface Props {
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  inputClassName?: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hiddenLabel?: boolean;
  multiline?: boolean;
  helperText?: string;
  value?: any;
  rows?: number;
  onChange?: (vaule: string) => void;
  customChange?: Function;
  error?: Datum;
  defaultCountry?: string;
  international?: boolean;
}

export const PhoneNumberInput: React.FC<Props> = ({
  wrapperClassName,
  labelClassName,
  label,
  id,
  placeholder,
  value: valueProps,
  helperText,
  name,
  customChange,
  disabled,
  className,
  error,
  onChange,
  readOnly,
  defaultCountry,
  international,
}) => {
  const [value, setValue] = React.useState(valueProps || '');

  React.useEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  const handleChange = (selectedValue: string) => {
    setValue(selectedValue);
    !!customChange && customChange(selectedValue);
  };

  return (
    <div className={wrapperClassName}>
      {!!label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <PhoneInput
        onChange={onChange || handleChange}
        id={id}
        name={name}
        className={`p-0 border border-gray-400 rounded-md ${className} ${
          error ? 'border border-red-600' : ''
        }`}
        placeholder={placeholder}
        readOnly={readOnly}
        displayInitialValueAsLocalNumber
        limitMaxLength
        disabled={disabled}
        value={onChange ? valueProps : value}
        defaultCountry={defaultCountry}
        autoComplete="tel"
        addInternationalOption={false}
        // countryCallingCodeEditable={countryCallingCodeEditable}
        international={international}
      />
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
};
