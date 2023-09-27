import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  //Best way to get default element props and add onto existing ones
  className?: string;
}

export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
