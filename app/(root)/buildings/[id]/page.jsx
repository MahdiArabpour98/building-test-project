"use client";

import { fakeData } from "@/lib/fake-data";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const BuildingDetails = () => {
  const params = useParams();
  const data = fakeData.find((item) => item.id === parseInt(params.id));

  if (!data) {
    return (
      <div className="text-center text-lg text-red-500">
        ساختمان مورد نظر یافت نشد.
      </div>
    );
  }

  return (
    <section className="container mx-auto mt-8 p-4">
      <Card className="overflow-hidden rounded-lg pt-0 shadow-xl">
        <Image
          src={data.image}
          alt={data.name}
          width={720}
          height={480}
          className="h-96 w-full object-cover"
        />
        <CardHeader className="bg-gray-200 p-6 dark:bg-gray-800">
          <CardTitle className="text-3xl font-bold">{data.name}</CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-200 p-6 dark:bg-gray-800">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="solid" className="bg-green-500 text-white">
              {data.status.name}
            </Badge>
            <Badge variant="solid" className="bg-blue-500 text-white">
              {data.location}
            </Badge>
          </div>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            {data.description}
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                آدرس:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{data.address}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                مهندس:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {data.engineer}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                مالک:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{data.owner}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                تعداد واحدها:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{data.units}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                فضای پارکینگ:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {data.parkingSpaces}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                مساحت:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {data.area} متر مربع
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                تاریخ شروع:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {data.startDate}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                تاریخ پایان:
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{data.endDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default BuildingDetails;
