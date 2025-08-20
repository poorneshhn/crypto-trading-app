import type { FC } from "react";
import type { TInputElementProps } from "./types";
import clsx from "clsx";

const variantStyles = {
  dark: {
    label: "text-white placeholder-gray-400",
    input:
      "dark:border-gray-700 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400",
  },
  light: {
    label: "bg-white text-gray-900 placeholder-gray-500",
    input:
      "rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400",
  },
};
export const Input: FC<TInputElementProps> = ({
  theme = "light",
  className,
  fieldError,
  label,
  name,
  inputRef,
  disabled,
  ...rest
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={clsx(variantStyles[theme].label, "block mb-0")}
      >
        {label}
      </label>
      <input
        disabled={disabled}
        name={name}
        id={name}
        ref={inputRef}
        {...rest}
        className={clsx(
          className,
          variantStyles[theme].input,
          "mt-1 block w-full px-4 py-2 border border-gray-300 mb-2",
          { "cursor-not-allowed": disabled }
        )}
      />
      {fieldError && (
        <span className="text-red-500 mb-4">{fieldError?.message}</span>
      )}
    </>
  );
};