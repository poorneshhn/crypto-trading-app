import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/Basic/Button";
import { InputControlled } from "@/components/Basic/InputControlled/InputControlled";
import usePromiseStatus from "@/hooks/usePromiseStatus";
import { ILoginForm } from "./types";
import { useLogin } from "./useLogin";
import { loginFormSchema } from "./validation";

const LoginForm = () => {
  const { control, handleSubmit } = useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormSchema),
    reValidateMode: "onChange",
    shouldFocusError: true,
  });

  const { loginUser } = useLogin();
  const { track, isPending } = usePromiseStatus();
  
  return (
    <form
      onSubmit={handleSubmit((data) => track(loginUser(data)))}
      className="flex flex-col gap-0.5 space-y-5 w-full max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
        Login to Your Account
      </h2>
      <InputControlled
        label="Email"
        name="email"
        placeholder="you@example.com"
        theme="dark"
        control={control}
        autoComplete="email"
      />
      <InputControlled
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••"
        theme="dark"
        autoComplete="current-password"
        control={control}
      />
      <Button type="submit" disabled={isPending} className="w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
