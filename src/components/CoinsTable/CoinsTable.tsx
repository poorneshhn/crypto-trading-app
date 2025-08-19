import { useEffect, useMemo, useState } from "react";
import type { SortDirection, SortKey } from "./types";
import { useGetCryptoCoins } from "@/services/cryptoCoins/hooks/useCryptoCoins";
import { toast } from "react-toastify";
import { Button } from "../Basic/Button";
import { BuySellCryptoCoins } from "../BuySellCryptoCoins/BuySellCryptoCoins";
import { Loader } from "../Basic/Loader/Loader";
import { sortRows } from "./helpers";
import { HeaderCell } from "./TableHeader";

const initialSort = {
  key: "name" as SortKey,
  direction: "asc" as SortDirection,
};

export const CoinsTable = () => {
  const { data, isFetching, isPending, error, fetchNextPage, hasNextPage } =
    useGetCryptoCoins();
  const [{ key, direction }, setSort] = useState(initialSort);

  const accumulatedPages = useMemo(() => {
    return (
      data?.pages.reduce(
        (allPages, currentPage) => allPages.concat(currentPage),
        []
      ) || []
    );
  }, [data?.pages]);

  const sorted = useMemo(
    () => sortRows(accumulatedPages, key, direction),
    [accumulatedPages, key, direction]
  );

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 8,
      }),
    []
  );

  useEffect(() => {
    if (isFetching && !isPending) {
      toast("Hang tight, fetching the latest prices...");
    }
  }, [isFetching, isPending]);

  useEffect(() => {
    if (error) {
      toast(error.message || "An error occurred while fetching data.");
    }
  }, [error]);

  if (isPending) {
    return <Loader />;
  }

  const handleToggle = (nextKey: SortKey) => () => {
    setSort((prev) =>
      prev.key === nextKey
        ? { key: nextKey, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key: nextKey, direction: "asc" }
    );
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[520px] w-full border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-sm text-gray-700">
              <th className="sticky top-0 bg-white px-4 py-3 border-b">
                <HeaderCell
                  label="Name"
                  active={key === "name"}
                  direction={direction}
                  onToggle={handleToggle("name")}
                />
              </th>
              <th className="sticky top-0 bg-white px-4 py-3 border-b">
                <HeaderCell
                  label="Price"
                  active={key === "price"}
                  direction={direction}
                  onToggle={handleToggle("price")}
                />
              </th>
              <th className="sticky top-0 bg-white px-4 py-3 border-b text-right">
                Buy/Sell
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, idx) => (
              <tr
                key={row.id}
                className={
                  "text-sm transition-colors " +
                  (idx % 2 === 0 ? "bg-white" : "bg-gray-50")
                }
              >
                <td className="px-4 py-3 align-middle text-gray-900">
                  <div className="flex items-center gap-2">
                    <img
                      src={row.image}
                      alt="crypto coin image"
                      className="w-4 h-4"
                    />
                    {row.name}
                  </div>
                </td>
                <td className="px-4 py-3 align-middle tabular-nums text-gray-900">
                  {fmt.format(row.current_price)}
                </td>
                <td className="px-4 py-3 align-middle text-right">
                  <BuySellCryptoCoins coin={row} />
                </td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-gray-500">
                  No items
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {hasNextPage && (
        <div className="w-full flex justify-center mt-4">
          <Button
            disabled={isFetching}
            variant="secondary"
            onClick={() => fetchNextPage()}
          >
            Show More
          </Button>
        </div>
      )}
    </>
  );
};
