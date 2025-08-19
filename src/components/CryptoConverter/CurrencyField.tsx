import { useFormContext } from "react-hook-form";
import { InputControlled } from "../Basic/InputControlled/InputControlled";
import { FC, useEffect } from "react";
import { ICurrencyFieldProps } from "./types";
import { FIELD_NAMES } from "./form";
import { getCryptoCoinObject } from "./helpers";
import { useAuthStore } from "@/store/useAuthStore/store";
import { useAllCryptoCoins } from "@/services/cryptoCoins/hooks/useAllCryptoCoins";

export const CurrencyField: FC<ICurrencyFieldProps> = ({ inputDisabled }) => {
  const { control, watch, setValue } = useFormContext();
  const { isAuthenticated } = useAuthStore();
  const { data } = useAllCryptoCoins(isAuthenticated);

  const [coinCount, cryptoCoin] = watch([
    FIELD_NAMES.COUNT,
    FIELD_NAMES.CRYPTO_COIN,
  ]);

  useEffect(() => {
    if (!inputDisabled) return;
    setValue(
      FIELD_NAMES.USD_VALUE,
      coinCount *
        (getCryptoCoinObject(data || [], cryptoCoin)?.current_price || 1)
    );
  }, [coinCount, cryptoCoin, data, setValue, inputDisabled]);
  return (
    <div>
      <InputControlled
        label="USD"
        placeholder="0"
        name={FIELD_NAMES.USD_VALUE}
        control={control}
        type="number"
        disabled={inputDisabled}
      />
    </div>
  );
};
