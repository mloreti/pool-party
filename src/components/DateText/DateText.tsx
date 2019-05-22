import React, { FC } from "react";
import { timeFromNow } from "../../api/utils";

export interface DateProps {
  readonly date: string;
}

const DateText: FC<DateProps> = ({ date }) => {
  return (
    <span
      style={{
        color: "lightslategray",
        fontSize: "12px",
        textTransform: "uppercase",
        letterSpacing: "0.1px"
      }}
    >
      {timeFromNow(date)}
    </span>
  );
};

export default DateText;
