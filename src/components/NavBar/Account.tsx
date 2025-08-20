import { ROUTES } from "@/constants/routes";
import { isMatchingRoute, getUserNameFromEmail } from "@/helpers/utils";
import clsx from "clsx";
import { Button } from "../Basic/Button/Button";
import { CustomLink } from "../Basic/CustomLink/CustomLink";
import { useLogin } from "../forms/LoginForm/useLogin";
import { useAuthStore } from "@/store/useAuthStore/store";

export const Account = () => {
  const { isAuthenticated, user } = useAuthStore();
  const { logoutUser } = useLogin();
  
  return (
    <ul className="flex space-x-4 items-center">
      {!isAuthenticated ? (
        <li
          className={clsx(
            {
              "text-amber-200": isMatchingRoute(
                ROUTES.LOGIN,
                location.pathname
              ),
            },
            "text-lg font-bold"
          )}
        >
          <CustomLink to={ROUTES.LOGIN}>Login</CustomLink>
        </li>
      ) : (
        <>
          <li>{"Hello, " + getUserNameFromEmail(user?.email || "")}</li>
          <li>
            <Button
              size="sm"
              variant="danger"
              onClick={() => {
                logoutUser({ toastMessage: "Successfully logged out" });
              }}
            >
              Logout
            </Button>
          </li>
        </>
      )}
    </ul>
  );
};
