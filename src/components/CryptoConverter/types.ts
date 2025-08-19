import { ICoin } from "@/types/types";
import { option } from "../Basic/Select/types";

export interface ICryptoConverterProps {
  data: ICoin[];
}

export interface ICryptoConverter {
  usdValue: number;
  count: number;
  cryptoCoin: string;
}

export interface ICurrencyFieldProps {
  inputDisabled?: boolean
}

export interface ICryptoFieldsProps extends ICurrencyFieldProps {
  options: ICoin[] | option[]; 
}
