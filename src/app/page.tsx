"use client";
import { WorkerType } from "@/types/workers";
import Image from "next/image";
import { useState, useEffect, useMemo, memo } from "react";
import { SkeletonCard } from "./components/skeleton";
import Pagination from "./components/pagination";


// worker's reusable car d
const WorkerCard = memo(({ worker }: { worker: WorkerType }) => (
  <div
    key={worker.id}
    className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    {/* Worker Image */}
    <div className="relative w-full h-80">
      <Image
        loading="lazy"
        src={worker.image}
        alt={worker.name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">{worker.name}</h2>
        <p className="text-gray-300 text-sm">{worker.service}</p>
        <p className="mt-1 font-semibold">
          ₹{Math.round(worker.pricePerDay * 1.18)} / day
        </p>

        <div className="mt-2 flex space-x-3 text-gray-300">
          <button className="hover:text-white transition-colors">
            <i className="fas fa-phone"></i>
          </button>
          <button className="hover:text-white transition-colors">
            <i className="fas fa-envelope"></i>
          </button>
          <button className="hover:text-white transition-colors">
            <i className="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
));
WorkerCard.displayName = "WorkerCard";


// workers page
export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await import("../../workers.json");
        setWorkersData(response.default);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load workers:", error);
      }
    };
    loadData();
  }, []);

  const filteredWorkers = useMemo(() => {
    return workersData
      .filter((worker) => worker.pricePerDay > 0)
      .filter((worker) => worker.id !== null)
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [workersData]);

  // Pagination logic
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorkers = filteredWorkers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <main className="min-h-screen px-4 py-8 bg-gradient-to-r">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 drop-shadow-lg">
        Our Workers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : currentWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
      </div>

      {/* Pagination */}
      {!loading && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
