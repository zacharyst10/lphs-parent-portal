import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { MapPin, User, Users, Calendar } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto p-6">
      <Skeleton className="mb-6 h-10 w-64" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="flex animate-pulse flex-col">
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <div className="mt-2 flex items-center">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <div className="mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
                <div className="ml-6 space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center">
                  <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                  <Skeleton className="h-4 w-1/3" />
                </div>
                <div className="ml-6">
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
