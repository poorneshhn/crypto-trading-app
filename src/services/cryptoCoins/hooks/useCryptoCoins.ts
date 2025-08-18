import { useInfiniteQuery } from '@tanstack/react-query';
import { cryptoCoinsQueryKeys } from '../cryptoCoins-qk';
import { CryptoCoinsApi } from '../cryptoCoins.api';

export const useGetCryptoCoins = () => {
  return useInfiniteQuery({
    queryKey: cryptoCoinsQueryKeys.cryptoCoins(),
    queryFn: ({ pageParam }:{pageParam: number}) => CryptoCoinsApi.getCryptoCoins(pageParam),
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length < 10 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchInterval: 60000,
    staleTime: 20000, 
  });
};
