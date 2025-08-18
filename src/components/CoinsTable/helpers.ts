import type { ICoin } from "../../types/types";
import type { SortDirection, SortKey } from "./types";

export function sortRows(rows: ICoin[], key: SortKey, dir: SortDirection) {
  const mul = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    if (key === "name") {
      return a.name.localeCompare(b.name) * mul;
    }
    return (a.current_price - b.current_price) * mul;
  });
}