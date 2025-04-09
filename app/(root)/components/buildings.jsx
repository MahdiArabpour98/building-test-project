import SearchTable from "@/components/search-table";

const types = [{}];

const Buildings = () => {
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
            <div className="text-sm">a</div>
          </div>
          <div>
            <div className="text-sm">مرحله ساخت</div>
          </div>
        </div>
        <div className="col-span-12 px-2 md:px-6 lg:col-span-8 2xl:col-span-9">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">data</div>
        </div>
      </div>
    </section>
  );
};

export default Buildings;
