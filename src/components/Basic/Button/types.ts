import type { ButtonHTMLAttributes } from "react";

export interface IButtonElementProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "outline" | "transparent";
    size?: "sm" | "md";
};