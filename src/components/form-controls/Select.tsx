import React from "react";
import { OptionTypeBase } from "react-select";
import { Datum } from "../../interfaces";
import ReactSelect from "react-select";
import { MdArrowDropDown } from "react-icons/md";

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
  labelKey = "label",
  valueKey = "value",
  openMenuOnClick,
}) => {
  const [, setValue] = React.useState<any>(null);
  // const [inputValue, setInputValue] = React.useState<any>(valueProps || "");

  React.useEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  const handleChange = (option: OptionTypeBase | null) => {
    setValue(option);
    // setInputValue(option ? option[valueKey] : "");
    !!customChange && customChange(option ? option[valueKey] : "");
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
            base.backgroundColor = "#FFF";
            base.borderColor = "#D0C9D6";
            base.borderRadius = "10px";
            base.padding = "8px";
            return base;
          },
          placeholder: (base) => {
            base.color = "#BDBDBD";
            base.fontWeight = 400;
            base.fontSize = "14px";
            return base;
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
            error?.message ? "text-red-600" : "text-gray-600"
          } text-xs`}
        >
          {error?.message}
        </span>
      )}
    </div>
  );
};

export default Select;
