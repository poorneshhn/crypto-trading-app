import { type FC, useState } from "react";
import type { ICryptoConverter, ICryptoConverterProps } from "./types";
import { FormProvider, useForm } from "react-hook-form";
import { CryptoFields } from "./CryptoFields";
import { CurrencyField } from "./CurrencyField";
import clsx from "clsx";
import { SECTIONS } from "./constants";
import { Button } from "../Basic/Button/Button";
import { FIELD_NAMES } from "./form";

export const CryptoConverter: FC<ICryptoConverterProps> = ({ data }) => {

  const [activeSection, setActiveSection] = useState(SECTIONS.CRYPTO_COIN);

  const methods = useForm<ICryptoConverter>({
    defaultValues: {
      [FIELD_NAMES.USD_VALUE]: 1,
      [FIELD_NAMES.COUNT]: 1,
      [FIELD_NAMES.CRYPTO_COIN]: data[0].id,
    },
  });

  const handleSwapClick = () => {
    setActiveSection((prev) => {
      return prev === SECTIONS.CRYPTO_COIN
        ? SECTIONS.CURRENCY
        : SECTIONS.CRYPTO_COIN;
    });
  };

  return (
    <FormProvider {...methods}>
      <div
        className={clsx(
          "p-4 w-[min(100vw,672px)] border-2 border-gray-300 flex flex-col gap-3",
          { "flex-col-reverse": activeSection === SECTIONS.CURRENCY }
        )}
      >
        <CryptoFields options={data} inputDisabled={SECTIONS.CURRENCY === activeSection} />
        <div className="flex items-center justify-center">
          <Button onClick={handleSwapClick}>
            <span>↕</span>
            <span>Swap</span>
          </Button>
        </div>
        <CurrencyField inputDisabled={SECTIONS.CRYPTO_COIN === activeSection} />
      </div>
    </FormProvider>
  );
};
