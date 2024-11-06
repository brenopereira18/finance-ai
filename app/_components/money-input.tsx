import React, { forwardRef } from "react";
import { Input, InputProps } from "./ui/input";
import { NumericFormat, NumericFormatProps } from "react-number-format";

// eslint-disable-next-line react/display-name
export const MoneyInput = forwardRef(
  (
    props: NumericFormatProps<InputProps>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <NumericFormat
        {...props}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        allowNegative={false}
        customInput={Input}
        getInputRef={ref}
      />
    );
  },
);
