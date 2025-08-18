import type { FC } from "react";
import { Select } from "../Select/Input";
import { COINS_TABLE_BUY_SELL_OPTIONS } from "../../CoinsTable/constants";
import type { ICoin } from "../../../types/types";
import { toast } from "react-toastify";

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
    />
  );
};
