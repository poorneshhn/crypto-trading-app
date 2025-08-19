import { Loader } from "@/components/Basic/Loader/Loader";
import { NavBar } from "@/components/NavBar";
import { useDocumentTitle } from "@/hooks/useDocumentTitle/useDocumentTitle";
import { useTokenExpiry } from "@/services/tokenExpiry/hooks/useTokenExpiry";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const BaseLayout: React.FC = () => {
 useTokenExpiry();
 useDocumentTitle();

  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
