import { COINS_TABLE_BUY_SELL_OPTIONS } from "@/components/CoinsTable/constants";
import { type ICoin } from "@/types/types";
import type { FC } from "react";

import { toast } from "react-toastify";
import { Select } from "../Basic/Select/Select";

export const BuySellCryptoCoins: FC<{coin: ICoin}> = ({coin}) => {
    const onChange = (value: string) => {
      toast.info(`Selected action: ${value} for ${coin.name}`);
    }
  return (
    <Select
      defaultValue={COINS_TABLE_BUY_SELL_OPTIONS[0].value}
      size="sm"
      onChange={onChange}
      options={COINS_TABLE_BUY_SELL_OPTIONS}
      reduce={(item) => item}
    />
  );
};
