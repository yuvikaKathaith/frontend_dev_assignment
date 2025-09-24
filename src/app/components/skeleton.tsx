export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl overflow-hidden shadow-md bg-white/10">
      <div className="w-full h-60 bg-gray-300/30"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300/30 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300/30 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300/30 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
}
