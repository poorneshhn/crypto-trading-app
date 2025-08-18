import * as Yup from "yup";
import { emailRegex } from "../../../helpers/regex";

export const loginFormSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .matches(emailRegex, "Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
