import { Navigate } from "react-router-dom";
import type { FC } from "react";
import LoginForm from "@/components/forms/LoginForm/LoginForm";
import { ROUTES } from "@/constants/routes";
import { useAuthStore } from "@/store/useAuthStore/store";

export const Login: FC = () => {
  const { isAuthenticated } = useAuthStore();
  
  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }
  return (
  <div className="flex items-center justify-center min-h-[calc(100vh-124px)]">
    <LoginForm />
    </div>
  );
}