import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> & TOverridden;

type extractedProps = ComponentProps<typeof Input>; // Extract all the props of a component

type inputProps = OverrideProps<
  ComponentProps<"input">,
  { onChange: (value: string) => void }
>; // Shorted override

export const Input = (
  props: Omit<ComponentProps<"input">, "onChange"> & {
    onChange: (value: string) => void;
  } // How we omit certain fields from a given interface for omission or longer overriding
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
