import clsx from "clsx";
import type { ISelectProps, Size } from "./types";

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-3.5 py-2.5",
};

export const Select = function Select({
  id,
  name,
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled,
  size = "md",
  fullWidth = true,
  className,
  ref,
  label,
  reduce,
  ...rest
}: ISelectProps) {
  const selectId =
    id || name || "select-" + Math.random().toString(36).slice(2);

  return (
    <div className={clsx({ "w-full": fullWidth })}>
      <div className="relative">
        <label>{label}</label>
        <select
          id={selectId}
          name={name}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={(e) => {
            const val = e.target.value;
            onChange?.(val);
          }}
          className={clsx(
            "block w-full appearance-none rounded-xl border shadow-sm",
            "bg-white text-gray-900 dark:bg-gray-800 dark:text-white",
            "border-gray-300 dark:border-gray-700",
            "placeholder-gray-400 cursor-pointer",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            disabled && "opacity-60 cursor-not-allowed",
            sizeClasses[size],
            className
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => {
            const { label, value, disabled } = reduce(opt);
            return (
              <option key={`${value}`} value={value as string} disabled={disabled as boolean}>
                {label}
              </option>
            );
          })}
        </select>

        <span
          className={clsx(
            "pointer-events-none absolute inset-y-0 right-3 top-3 flex items-center",
            "text-gray-500 dark:text-white"
          )}
          aria-hidden="true"
        >
          ▾
        </span>
      </div>
    </div>
  );
};
