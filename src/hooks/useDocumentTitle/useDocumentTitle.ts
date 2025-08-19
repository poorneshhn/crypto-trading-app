import { getDocumentTitle } from "@/helpers/utils";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useDocumentTitle = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = getDocumentTitle(location.pathname);
  }, [location.pathname]);
};
