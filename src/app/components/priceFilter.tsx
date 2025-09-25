export default function PriceFilter({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: PriceFilterProps) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onMinChange(val === "" ? "" : Number(val));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onMaxChange(val === "" ? "" : Number(val));
  };

  return (
    <div className="flex gap-2">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={handleMinChange}
        className="border border-gray-500 rounded px-2 py-1 w-25"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleMaxChange}
        className="border border-gray-500 rounded px-2 py-1 w-28"
      />
    </div>
  );
}
