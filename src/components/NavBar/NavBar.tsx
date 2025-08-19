import type { FC } from "react"
import { ROUTES } from "../../constants/routes";
import { CustomLink } from "../Basic/CustomLink/CustomLink";
import { NAVBAR_ROUTES } from "./constants";
import clsx from "clsx";
import { isMatchingRoute } from "../../helpers/utils";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore/store";
import { Button } from "../Basic/Button";
import { useLogin } from "../forms/LoginForm/useLogin";


const NavBar: FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();
  const { logoutUser } = useLogin();
  
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <ul className="flex space-x-4">
        {
          NAVBAR_ROUTES.map((route) => (
            <li key={route.title} className={clsx({"text-amber-200": isMatchingRoute(route.route, location.pathname)}, "text-lg font-bold")}>
              <CustomLink to={route.route}>{route.title}</CustomLink>
            </li>
          ))
        }
      </ul>
      <ul>
{ !isAuthenticated ? <li className={clsx({"text-amber-200": isMatchingRoute(ROUTES.LOGIN, location.pathname)}, "text-lg font-bold")}>
          <CustomLink to={ROUTES.LOGIN}>Login</CustomLink>
        </li> : <li>
          <Button
            variant="primary"
            onClick={() => {
              logoutUser({toastMessage: "Successfully logged out"});
            }}
          >
            Logout
          </Button>
        </li>}
      </ul>
    </nav>
  )
}

export default NavBar;