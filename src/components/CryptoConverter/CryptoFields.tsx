import { InputControlled } from "../Basic/InputControlled/InputControlled";
import { SelectComponentControl } from "../Basic/SelectComponentControl/SelectComponentControl";
import { useFormContext } from "react-hook-form";
import { type FC, useEffect } from "react";
import type { ICryptoFieldsProps } from "./types";
import type { option } from "../Basic/Select/types";
import { FIELD_NAMES } from "./form";
import { useAllCryptoCoins } from "@/services/cryptoCoins/hooks/useAllCryptoCoins";
import { getCryptoCoinObject } from "./helpers";
import { useAuthStore } from "@/store/useAuthStore/store";

export const CryptoFields: FC<ICryptoFieldsProps> = ({
  options,
  inputDisabled,
}) => {
  const { control, watch, setValue } = useFormContext();
  const { isAuthenticated } = useAuthStore();
  const { data } = useAllCryptoCoins(isAuthenticated);

  const [usdValue, cryptoCoin] = watch([
    FIELD_NAMES.USD_VALUE,
    FIELD_NAMES.CRYPTO_COIN,
  ]);

  useEffect(() => {
    if (!inputDisabled) return;
    setValue(
      FIELD_NAMES.COUNT,
      usdValue /
        (getCryptoCoinObject(data || [], cryptoCoin)?.current_price || 1)
    );
  }, [usdValue, cryptoCoin, data, setValue, inputDisabled]);

  return (
    <div className="flex gap-2">
      <div className="w-full">
        <SelectComponentControl
          label="Coin Type"
          placeholder="Select coin"
          name={FIELD_NAMES.CRYPTO_COIN}
          control={control}
          options={options as option[]}
          reduce={(item: option) => ({
            label: item.name,
            value: item.id,
            disabled: false,
          })}
        />
      </div>
      <div className="w-full">
        <InputControlled
          label="Number of coins"
          placeholder="0"
          name={FIELD_NAMES.COUNT}
          control={control}
          type="number"
          disabled={inputDisabled}
        />
      </div>
    </div>
  );
};
