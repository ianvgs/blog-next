import React from "react";
import { useController, FieldValues } from "react-hook-form";
import chroma from "chroma-js";
import { ColourOption, colourOptions } from "./data";
import Select, { StylesConfig } from "react-select";

////////////

const colourStyles: StylesConfig<ColourOption, true> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

////////////////

export const ReactSelect = /* <
  TFieldValues extends FieldValues & ReactSelectProps
> */ (props: /* TFieldValues */ any) => {
    const { control, name, options, isColored = false, ...rest } = props;
    const { field } = useController({
      name,
      control,
    });

    //conversor do value(do select)
    const valueInterceptor = (value: string) => {
      /* console.log(value) */
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
        closeMenuOnSelect={isColored ? false : true}
        styles={isColored ? colourStyles : ""}
        noOptionsMessage={() => null}
      />
    );
  };
