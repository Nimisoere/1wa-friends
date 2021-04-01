import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { OptionTypeBase } from 'react-select';
import { Datum } from '../../interfaces';

interface Props {
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hiddenLabel?: boolean;
  helperText?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customChange?: Function;
  error?: Datum;
}

const LocationInput: React.FC<Props> = ({
  wrapperClassName,
  labelClassName,
  label,
  id,
  placeholder,
  helperText,
  name,
  customChange,
  disabled,
  className,
  error,
}) => {
  const [, setValue] = React.useState<OptionTypeBase | null>(null);

  const handleChange = (value: OptionTypeBase | null) => {
    setValue(value);
    !!customChange && customChange(value);
  };
  return (
    <div className={wrapperClassName}>
      {!!label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        autocompletionRequest={{
          types: ['address'],
        }}
        minLengthAutocomplete={3}
        selectProps={{
          'aria-label': label,
          isDisabled: disabled,
          noOptionsMessage: (value) => value && 'Location not found',
          backspaceRemovesValue: true,
          className,
          escapeClearsValue: true,
          name,
          isClearable: true,
          isSearchable: true,
          openMenuOnClick: false,
          styles: {
            control: (base) => {
              const newBase = { ...base };
              newBase.backgroundColor = '#F2F3F5';
              newBase.border = 'none';
              newBase.borderRadius = '10px';
              newBase.padding = '8px';
              return newBase;
            },
            placeholder: (base) => {
              const newBase = { ...base };
              newBase.color = '#BDBDBD';
              newBase.fontWeight = 400;
              newBase.fontSize = '14px';
              return newBase;
            },
          },
          components: {
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          },
          placeholder,
          onChange: (value) => handleChange(value),
        }}
      />
      {(helperText || error?.message) && (
        <span
          className={`${
            error?.message ? 'text-red-600' : 'text-gray-600'
          } text-xs`}
        >
          {error?.message || helperText}
        </span>
      )}
    </div>
  );
};

export default LocationInput;
