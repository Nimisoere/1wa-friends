import React from 'react';
import ReactSelect, { OptionTypeBase } from 'react-select';
import * as CSS from 'csstype';
import { MdArrowDropDown } from 'react-icons/md';
import { Datum } from '../../interfaces';

interface Props {
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  labelKey?: string;
  valueKey?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hiddenLabel?: boolean;
  helperText?: string;
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customChange?: Function;
  error?: Datum;
  isMulti?: boolean;
  noOptionsMessage?: (value: any) => string | null;
  options: Datum[];
  backspaceRemovesValue?: boolean;
  escapeClearsValue?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  openMenuOnClick?: boolean;
  controlStyles?: CSS.Properties;
  placeholderStyles?: CSS.Properties;
}

const Select: React.FC<Props> = ({
  wrapperClassName,
  labelClassName,
  label,
  id,
  placeholder,
  value: valueProps,
  helperText,
  noOptionsMessage,
  options,
  onChange,
  name,
  customChange,
  disabled,
  className,
  backspaceRemovesValue,
  escapeClearsValue,
  isMulti,
  error,
  isClearable,
  isSearchable,
  labelKey = 'label',
  valueKey = 'value',
  openMenuOnClick,
  placeholderStyles,
  controlStyles,
}) => {
  const [, setValue] = React.useState<any>(null);
  // const [inputValue, setInputValue] = React.useState<any>(valueProps || "");

  React.useEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  const handleChange = (option: OptionTypeBase | null) => {
    setValue(option);
    // setInputValue(option ? option[valueKey] : "");
    !!customChange && customChange(option ? option[valueKey] : '');
  };

  return (
    <div className={wrapperClassName}>
      {!!label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      <ReactSelect
        placeholder={placeholder}
        name={name}
        isDisabled={disabled}
        options={options}
        isMulti={isMulti}
        noOptionsMessage={noOptionsMessage}
        backspaceRemovesValue={backspaceRemovesValue}
        className={className}
        onChange={handleChange}
        escapeClearsValue={escapeClearsValue}
        isClearable={isClearable}
        isSearchable={isSearchable}
        // inputValue={inputValue}
        openMenuOnClick={openMenuOnClick}
        getOptionLabel={(option) => option[labelKey]}
        getOptionValue={(option) => option[valueKey]}
        styles={{
          control: (base) => {
            const newBase = { ...base };
            newBase.backgroundColor = '#FFF';
            newBase.borderColor = '#D0C9D6';
            newBase.borderRadius = '10px';
            newBase.padding = '8px';
            return { ...newBase, ...controlStyles };
          },
          placeholder: (base) => {
            const newBase = { ...base };
            newBase.color = '#BDBDBD';
            newBase.fontWeight = 400;
            newBase.fontSize = '14px';
            return { ...newBase, ...placeholderStyles };
          },
        }}
        components={{
          DropdownIndicator: () => <MdArrowDropDown className="text-2xl" />,
          IndicatorSeparator: () => null,
        }}
      />
      {error?.message && (
        <span
          className={`${
            error?.message ? 'text-red-600' : 'text-gray-600'
          } text-xs`}
        >
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default Select;
