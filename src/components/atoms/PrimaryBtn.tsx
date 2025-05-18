import { ReactNode } from "react";

type PropsType = {
  size: "sm" | "lg"
  onClick: () => void
  children: ReactNode
}

const SIZE_MAPPING = {
  sm: "p-2 text-sm",
  lg: "p-4 text-lg",
};

export const PrimaryBtn = ({size, onClick, children}: PropsType) => {
  return (
    <button
      className={`bg-lime-800 text-white ${SIZE_MAPPING[size]} rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
