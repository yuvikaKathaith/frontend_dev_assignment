"use client";
import { WorkerType } from "@/types/workers";
import Image from "next/image";
import { useState, useEffect, useMemo, memo } from "react";
import { SkeletonCard } from "./components/skeleton";
import Pagination from "./components/pagination";
import ServiceFilter from "./components/serviceFilter";
import PriceFilter from "./components/priceFilter";

const WorkerCard = memo(({ worker }: { worker: WorkerType }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="relative w-full h-80">
      <img
        loading="lazy"
        src={worker.image}
        alt={worker.name}
        className="object-fill"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h2 className="text-lg font-bold">{worker.name}</h2>
        <p className="text-gray-300 text-sm">{worker.service}</p>
        <p className="mt-1 font-semibold">
          ₹{Math.round(worker.pricePerDay * 1.18)} / day
        </p>
      </div>
    </div>
  </div>
));
WorkerCard.displayName = "WorkerCard";

export default function WorkersPage() {
  const [workersData, setWorkersData] = useState<WorkerType[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // actual filters
  const [serviceFilter, setServiceFilter] = useState("all");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  //pending filters
  const [pendingService, setPendingService] = useState("all");
  const [pendingMin, setPendingMin] = useState<number | "">("");
  const [pendingMax, setPendingMax] = useState<number | "">("");

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkers = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/api/workers");
        if (!res.ok) throw new Error("Failed to fetch workers");

        const data: WorkerType[] = await res.json();
        setWorkersData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load workers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchWorkers();
  }, []);

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const response = await import("../../workers.json");
  //       setWorkersData(response.default);
  //     } catch (error) {
  //       console.error("Failed to load workers:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadData();
  // }, []);

  //applying filters onclick of apply filters button
  const filteredWorkers = useMemo(() => {
    return workersData
      .filter((worker) => worker.pricePerDay > 0)
      .filter((worker) => {
        const matchesService =
          serviceFilter === "all" || worker.service === serviceFilter;
        const matchesMin = minPrice === "" || worker.pricePerDay >= minPrice;
        const matchesMax = maxPrice === "" || worker.pricePerDay <= maxPrice;
        return matchesService && matchesMin && matchesMax;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [workersData, serviceFilter, minPrice, maxPrice]);

  //pagination logic
  const totalPages = Math.ceil(filteredWorkers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorkers = filteredWorkers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const uniqueServices = useMemo(() => {
    return Array.from(new Set(workersData.map((w) => w.service)));
  }, [workersData]);

  return (
    <main className="min-h-screen px-4 py-8 bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 drop-shadow-lg">
        Our Workers
      </h1>

      {/* services and price filter s */}
      <div className="flex flex-wrap gap-4 mb-6 justify-end items-center">
        <ServiceFilter
          services={uniqueServices}
          selectedService={pendingService}
          onChange={setPendingService}
        />
        <PriceFilter
          minPrice={pendingMin}
          maxPrice={pendingMax}
          onMinChange={(val) => setPendingMin(val === "" ? "" : Number(val))}
          onMaxChange={(val) => setPendingMax(val === "" ? "" : Number(val))}
        />
        <button
          onClick={() => {
            setServiceFilter(pendingService);
            setMinPrice(pendingMin);
            setMaxPrice(pendingMax);
            setCurrentPage(1);
          }}
          className="px-4 py-1 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition"
        >
          Apply Filters
        </button>
      </div>
 
      {/* error */}{" "}
      {error && (
        <div className="col-span-full text-center text-red-600 font-medium py-4">
          {" "}
          {error}{" "}
        </div>
      )}

      {/* displaying workers cards*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {loading ? (
          Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
        ) : currentWorkers.length > 0 ? (
          currentWorkers.map((worker) => (
            <WorkerCard key={worker.id} worker={worker} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 text-lg font-medium py-10">
            No matches found
          </div>
        )}
      </div>
      
      {/* pagination */}
      {!loading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </main>
  );
}
