import React from "react";
import { useController } from "react-hook-form";
import Select from "react-select";

export const ReactSelect =
  (props: any) => {
    const { control, name, options, isColored = false, ...rest } = props;
    const { field } = useController({
      name,
      control,
    });

    //conversor do value(do select)
    const valueInterceptor = (value: string) => {
      if (typeof value === "string" && value === "") {
        return options.find(
          (option: { value: string; label: string }) =>
            option.value.toString() === value
        );
      }
      return value;
    };

    return (
      <Select
        {...field}
        {...rest}
        placeholder={props.placeholder}
        options={options || []}
        value={valueInterceptor(field.value)}
        /*    closeMenuOnSelect={isColored ? false : true} */
        noOptionsMessage={() => null}
      />
    );
  };
