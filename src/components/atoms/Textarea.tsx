import { ComponentProps } from "react";

export const Textarea = (props: ComponentProps<"textarea">) => {
  return (
    <textarea
      {...props}
      className="w-full border-4 border-solid border-lime-800 rounded-md p-2"
    />
  );
};