import { Navigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm/LoginForm";
import { ROUTES } from "../../constants/routes";
import { useAuthStore } from "../../store/useAuthStore/store";
import type { FC } from "react";

const Login: FC = () => {
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

export default Login;