import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { routes } from "@/routes/routes";
import Image from "next/image";
import Link from "next/link";

const BuildingCard = ({ data }) => {
  return (
    <Link href={routes.root.buildings.details(data.id)}>
      <Card className="flex cursor-pointer flex-col rounded-lg border p-0 shadow-lg transition-all duration-300 hover:scale-105">
        <Image
          src={data.image}
          alt={data.name}
          width={500}
          height={300}
          className="h-48 w-full rounded-t-lg object-cover"
        />
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold">{data.name}</CardTitle>
            <div className="flex items-center gap-1.5">
              <div className="size-2 animate-pulse rounded-full bg-yellow-500" />
              <span className="text-muted-foreground text-xs">
                {data.status.name}
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex h-full flex-col justify-between pb-4">
          <p className="text-muted-foreground text-sm">{data.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <Badge className="bg-teal-500 text-xs">{data.status.name}</Badge>
            <span className="text-xs">{data.location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BuildingCard;
