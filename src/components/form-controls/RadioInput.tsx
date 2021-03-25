import React, { useState } from "react";
import { Datum } from "../../interfaces";

interface NoahRadioProps {
  name: string;
  label?: string;
  id: string;
  customChange?: Function;
  labelPlacement?: "start" | "end";
  value: any;
  selectedValue?: any;
  wrapperClassName?: string;
  labelClassName?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  hiddenLabel?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  error?: Datum;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput: React.FC<NoahRadioProps> = React.memo(
  ({
    selectedValue: selectedValueProps,
    value,
    label,
    labelPlacement = "start",
    wrapperClassName,
    labelClassName,
    className,
    disabled,
    name,
    readOnly,
    id,
    customChange,
    onChange,
  }) => {
    const [selectedValue, setSelectedValue] = useState(selectedValueProps);

    React.useEffect(() => {
      setSelectedValue(selectedValueProps);
    }, [selectedValueProps]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
      !!customChange && customChange(event.target.value);
    };

    return (
      <div className={wrapperClassName}>
        <label htmlFor={id}>
          {labelPlacement === "start" && (
            <span className={labelClassName}>{label}</span>
          )}
          <input
            readOnly={readOnly}
            disabled={disabled}
            className={className}
            checked={
              onChange ? selectedValueProps === value : selectedValue === value
            }
            value={value}
            onChange={onChange || handleChange}
            type="radio"
            name={name}
            id={id}
           />
          {labelPlacement === "end" && (
            <span className={labelClassName}>{label}</span>
          )}
        </label>
      </div>
    );
  }
);

export default RadioInput;
