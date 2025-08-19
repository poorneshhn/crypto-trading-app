import { ICoin } from "@/types/types";

export const getCryptoCoinObject = (cryptoCoinList: ICoin[], id: string) => {
    return cryptoCoinList.find(cryptoCoin => cryptoCoin.id === id);
}