import { Loader } from "@/components/Basic/Loader/Loader";
import { CryptoConverter } from "@/components/CryptoConverter/CryptoConverter";
import { useAllCryptoCoins } from "@/services/cryptoCoins/hooks/useAllCryptoCoins";
import { useAuthStore } from "@/store/useAuthStore/store";
import { useEffect, type FC } from "react";
import { toast } from "react-toastify";

export const Trade: FC = () => {
  const { isAuthenticated } = useAuthStore();
    const { data, isPending, error } = useAllCryptoCoins(isAuthenticated);

    useEffect(() => {
        if (error) {
          toast(error.message || "An error occurred while fetching data.");
        }
      }, [error]);
    
      if (isPending) {
        return <Loader />;
      }
  return <div className="flex justify-center">
    <CryptoConverter data={data || []}/>
  </div>
};
