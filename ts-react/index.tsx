import React from "react";

interface buttonProps {
  className: string;
}
export const Button = (props: buttonProps) => {
  return <button>{props.className}</button>;
};

export const Component = () => {
  return (
    <div>
      <p>Hello There</p>
      <Button className="my-class"></Button>
    </div>
  );
};
