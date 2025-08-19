import { InputControlled } from "../Basic/InputControlled/InputControlled";
import { SelectComponentControl } from "../Basic/SelectComponentControl";
import { useFormContext } from "react-hook-form";
import { FC, useEffect } from "react";
import { ICryptoFieldsProps } from "./types";
import { option } from "../Basic/Select/types";
import { FIELD_NAMES } from "./form";
import { useAllCryptoCoins } from "@/services/cryptoCoins/hooks/useAllCryptoCoins";
import { useAuthStore } from "@/store/useAuthStore/store";
import { getCryptoCoinObject } from "./helpers";

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
