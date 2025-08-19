import { axiosInstance } from '../axios';
import type { ICoin } from '../../types/types';

export const CryptoCoinsApi = {
  getCryptoCoins: async (pageParam = 1) => {
    const { data } = await axiosInstance.get<ICoin[]>("/", {
      params: {
        vs_currency: 'usd',
        per_page: 10,
        page: pageParam,
      },
    });
    return data;
  },

  getAllCryptoCoins: async () => {
    const { data } = await axiosInstance.get<ICoin[]>("/", {
      params: {
        vs_currency: 'usd',
      },
    });
    return data;
  },
};
