import type { SortDirection } from "./types";

export const HeaderCell = ({
  label,
  active,
  direction,
  onToggle,
}: {
  label: string;
  active: boolean;
  direction: SortDirection;
  onToggle: () => void;
}) => {
  const arrow = !active ? "↕" : direction === "asc" ? "▲" : "▼";
  return (
    <button
      type="button"
      onClick={onToggle}
      className={
        "flex cursor-pointer items-center gap-1 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md p-1"
      }
      aria-sort={active ? (direction === "asc" ? "ascending" : "descending") : "none"}
      title={`Sort by ${label}`}
    >
      <span>{label}</span>
      <span aria-hidden>{arrow}</span>
    </button>
  );
}