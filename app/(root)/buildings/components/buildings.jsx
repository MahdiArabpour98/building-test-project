"use client";

import SearchTable from "@/components/search-table";
import BuildingType from "./building-type";
import { useEffect, useState } from "react";
import { fakeData } from "@/lib/fake-data";
import BuildingCard from "./building-card";
import { useSearchParams } from "next/navigation";

const types = [
  {
    name: "همه",
    slug: null,
  },
  {
    name: "در حال بازسازی",
    slug: "under-renovation",
  },
  {
    name: "در حال طراحی",
    slug: "under-design",
  },
  {
    name: "در حال ساخت",
    slug: "under-construction",
  },
  {
    name: "تکمیل شده",
    slug: "completed",
  },
];

const Buildings = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || null;
  const query = searchParams.get("search") || "";

  const [data, setData] = useState(fakeData);

  useEffect(() => {
    const filteredData = fakeData.filter((item) => {
      const isTypeMatch = type ? item.status.slug === type : true;
      const isQueryMatch = query
        ? item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.location.toLowerCase().includes(query.toLowerCase()) ||
          item.address.toLowerCase().includes(query.toLowerCase())
        : true;
      return isTypeMatch && isQueryMatch;
    });
    setData(filteredData);
  }, [type, query]);

  return (
    <section className="relative flex min-h-[calc(100vh-64px)] justify-center">
      <div className="mt-8 grid w-full grid-cols-12 gap-2">
        <div className="col-span-12 space-y-8 px-2 md:px-5 lg:col-span-4 lg:px-8 2xl:col-span-3">
          <SearchTable
            queryTitle={"search"}
            async={true}
            className="h-9 w-full focus:outline-0"
          />
          <div>
            <div className="text-sm">مرحله ساخت</div>
            <BuildingType types={types} queryTitle="type" query="slug" />
          </div>
        </div>
        <div className="col-span-12 px-2 md:px-6 lg:col-span-8 2xl:col-span-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.map((item) => (
              <BuildingCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buildings;
