import clsx from "clsx";
import type { SelectProps, Size } from "./types";

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-3.5 py-2.5",
  lg: "text-base px-4 py-3",
};

export const Select = function Select<T extends string | number = string>({
  id,
  name,
  options,
  value,
  defaultValue,
  onChange,
  placeholder,
  helperText,
  error,
  disabled,
  size = "md",
  fullWidth = true,
  className,
  ref,
  ...rest
}: SelectProps<T>) {
  const selectId =
    id || name || "select-" + Math.random().toString(36).slice(2);

  return (
    <div className={clsx(fullWidth && "w-full")}>
      <div className="relative">
        <select
          id={selectId}
          name={name}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={helperText ? `${selectId}-help` : undefined}
          onChange={(e) => {
            const raw = e.target.value as unknown as T;
            onChange?.(raw);
          }}
          className={clsx(
            "block w-full appearance-none rounded-xl border shadow-sm",
            "bg-white text-gray-900 dark:bg-gray-800 dark:text-white",
            "border-gray-300 dark:border-gray-700",
            "placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            disabled && "opacity-60 cursor-not-allowed",
            sizeClasses[size],
            error && "border-red-500 focus:ring-red-500 focus:border-red-500",
            className
          )}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option
              key={`${opt.value}`}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label}
            </option>
          ))}
        </select>

        <span
          className={clsx(
            "pointer-events-none absolute inset-y-0 right-3 flex items-center",
            "text-gray-500 dark:text-gray-400"
          )}
          aria-hidden="true"
        >
          ▾
        </span>
      </div>

      {(helperText || error) && (
        <p
          id={`${selectId}-help`}
          className={clsx(
            "mt-1 text-xs",
            error ? "text-red-600" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {typeof error === "string" ? error : helperText}
        </p>
      )}
    </div>
  );
};
