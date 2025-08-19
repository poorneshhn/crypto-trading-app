import type { FC } from "react";
import { CustomLink } from "../Basic/CustomLink/CustomLink";
import { NAVBAR_ROUTES } from "./constants";
import clsx from "clsx";
import { isMatchingRoute } from "../../helpers/utils";
import { useLocation } from "react-router-dom";
import { Account } from "./Account";

const NavBar: FC = () => {
  const location = useLocation();


  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <ul className="flex space-x-4">
        {NAVBAR_ROUTES.map((route) => (
          <li
            key={route.title}
            className={clsx(
              {
                "text-amber-200": isMatchingRoute(
                  route.route,
                  location.pathname
                ),
              },
              "text-lg font-bold"
            )}
          >
            <CustomLink to={route.route}>{route.title}</CustomLink>
          </li>
        ))}
      </ul>
      <Account/>
    </nav>
  );
};

export default NavBar;
