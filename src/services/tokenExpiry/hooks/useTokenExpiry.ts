import { useQuery } from '@tanstack/react-query';
import { tokenExpiryKeys } from '../tokenExpiry-qk';
import { verifyToken } from '../../../helpers/auth';
import { useAuthStore } from '../../../store/useAuthStore/store';
import { useLogin } from '../../../components/forms/LoginForm/useLogin';

export const useTokenExpiry = () => {
  const { token } = useAuthStore();
  const { logoutUser } = useLogin();
  return useQuery({
    queryKey: tokenExpiryKeys.tokenExpiry(),
    queryFn: async () => {
      const res = await verifyToken(token);
      if(!res) logoutUser({isSessionLogout: true, toastMessage: "Session expired, please log in again."});
      return res;
    },
    enabled: !!token,
  });
};
