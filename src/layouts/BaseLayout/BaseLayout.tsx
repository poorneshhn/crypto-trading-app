import { Suspense } from "react";
import { NavBar } from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import { Loader } from "../../components/Basic/Loader";
import { useTokenExpiry } from "../../services/tokenExpiry/hooks/useTokenExpiry";

export const BaseLayout: React.FC = () => {
 useTokenExpiry();
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <main className="container mx-auto px-4 py-8 bg-gray-100">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
