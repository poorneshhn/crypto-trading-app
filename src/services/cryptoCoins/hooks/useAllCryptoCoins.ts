import { useQuery } from '@tanstack/react-query';
import { cryptoCoinsQueryKeys } from '../cryptoCoins-qk';
import { CryptoCoinsApi } from '../cryptoCoins.api';

export const useAllCryptoCoins = (enabled: boolean = true) => {
  return useQuery({
    queryKey: cryptoCoinsQueryKeys.cryptoCoinsAll(),
    queryFn: () => CryptoCoinsApi.getAllCryptoCoins(),
    
    refetchInterval: 60000,
    staleTime: 20000, 
    enabled,
  });
};
