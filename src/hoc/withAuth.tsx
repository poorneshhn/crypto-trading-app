import { Navigate } from "react-router-dom";
import { QUERY_PARAMS, ROUTES } from "../constants/routes";
import { useAuthStore } from "../store/useAuthStore/store";

export function withAuth<P extends object>(
  Component: React.ComponentType<P>
) {
  return function ProtectedComponent(props: P) {
    const { isAuthenticated } = useAuthStore();

    if (!isAuthenticated) {
      return <Navigate to={`${ROUTES.LOGIN}?${QUERY_PARAMS.REDIRECT}=${ROUTES.TRADE}`} replace />;
    }

    return <Component {...props} />;
  };
}