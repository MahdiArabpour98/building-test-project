"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BuildingType = ({ types, queryTitle, query }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (newType) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [queryTitle]: newType,
      page: null,
    };

    if (current[queryTitle] === String(newType)) {
      query[queryTitle] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };
  return (
    <div className="mx-auto mt-3 flex flex-wrap items-center justify-start gap-2">
      {types.map((item) => (
        <Button
          key={item?.name}
          variant={
            searchParams.get(queryTitle) !== item[query] ? "outline" : "default"
          }
          onClick={() => handleFilter(item[query])}
        >
          {item?.name}
        </Button>
      ))}
    </div>
  );
};

export default BuildingType;
