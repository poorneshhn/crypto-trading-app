import { useCallback } from "react";
import { useLocation } from "react-router-dom";

export const useGetQueryParams = () => {
    const location = useLocation();
    const getQueryParam = useCallback((key: string): string | null => {
        const queryParams = new URLSearchParams(location.search);
        return queryParams.get(key);
    }, [location.search]);
    return {
        getQueryParam,
    };
}
