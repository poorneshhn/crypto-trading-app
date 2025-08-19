import type { FC } from "react"
import clsx from "clsx";
import { IButtonElementProps } from "./types";

const buttonVariants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
  secondary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400 shadow-sm",
  outline:
    "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
  transparent:
    "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
};

const buttonSize = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
};
const Button: FC<IButtonElementProps> = ({className, variant = "primary", size = "md", disabled, ...rest}) => {
  return (
    <button className={clsx(className, {"cursor-not-allowed": disabled}, "cursor-pointer p-2 px-4 rounded-2xl", buttonVariants[variant], buttonSize[size])} {...rest} />
  )
}

export default Button;