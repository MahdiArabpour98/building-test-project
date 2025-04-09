"use client";

import qs from "query-string";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, X } from "lucide-react";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

const SearchTable = ({ queryTitle, className, async }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      search: searchParams.get(queryTitle) || "",
    },
    mode: "onChange",
  });

  const { setValue, handleSubmit } = form;

  function onSubmit(values) {
    setLoading(true);

    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      ["page"]: 1,
      [queryTitle]: values.search || null,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
    setLoading(false);
  }

  function onChangeHandler() {
    if (timer) clearTimeout(timer);

    setLoading(true);

    const newTimer = setTimeout(() => {
      handleSubmit(onSubmit)();
    }, 700);

    setTimer(newTimer);
  }

  return (
    <Form {...form}>
      <form
        onChange={async ? onChangeHandler : handleSubmit(onSubmit)}
        className="relative"
      >
        {!!loading ? (
          <Loader2
            size={14}
            strokeWidth={1.5}
            className="text-primary loading-xs absolute top-1/2 left-1.5 z-10 h-7 -translate-y-1/2 animate-spin"
          />
        ) : (
          <button
            type="button"
            className={cn(
              "absolute top-1/2 left-1.5 z-10 h-7 -translate-y-1/2 cursor-pointer border-none bg-transparent px-0 py-0",
              { hidden: !form.watch("search") },
            )}
            onClick={() => {
              onSubmit({ search: "" });
              setValue("search", "");
            }}
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        )}

        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="relative mb-0 w-full">
              <Input
                type="text"
                placeholder="جستجو..."
                className={cn(
                  "w-full min-w-60 rounded-lg pr-2 pl-6 focus:outline-0",
                  className,
                )}
                {...field}
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchTable;
