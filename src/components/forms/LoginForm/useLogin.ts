import { useCallback } from "react";
import { wait } from "../../../helpers/utils";
import { useAuthStore } from "../../../store/useAuthStore/store";
import type { IUser } from "../../../types/types";
import { createToken } from "../../../helpers/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { QUERY_PARAMS, ROUTES } from "../../../constants/routes";
import { useGetQueryParams } from "../../../hooks/useGetQueryParams/useGetQueryParams";

export const useLogin = () => {
    const { setUser, setAuthentication, setToken} = useAuthStore();
    const { getQueryParam } = useGetQueryParams();
    const navigate = useNavigate();

    const loginUser = useCallback(async (payload: IUser) => {
        const id = toast.loading("Logging in...");
        try {
        const token = await createToken(payload);
        setUser(payload);
        setAuthentication(true);
        setToken(token);
        
        await wait(1000);

        toast.update(id, { render: "Successfully logged in", type: "success", isLoading: false });
        
        const redirect = getQueryParam(QUERY_PARAMS.REDIRECT);

        if (redirect) {
            navigate(redirect, { replace: true });
            return;
        }
        navigate(ROUTES.HOME, { replace: true });
         } catch (error) {
            if(error instanceof Error)
            toast.update(id, { render: error.message, type: "error", isLoading: false });
        }
    
    }, [setUser, setAuthentication, setToken, getQueryParam, navigate]);

    const logoutUser = useCallback(({isSessionLogout = false, toastMessage} : {isSessionLogout?: boolean, toastMessage: string}) => {
        if(isSessionLogout) {
            toast.error(toastMessage);
        } else {
            toast.success(toastMessage);
        }
        setUser(null);
        setToken(null);
        setAuthentication(false);
        navigate(ROUTES.LOGIN, { replace: true });
    }, [setUser, setAuthentication, setToken, navigate]);

    return { loginUser, logoutUser };
};