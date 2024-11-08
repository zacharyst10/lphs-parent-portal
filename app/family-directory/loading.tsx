import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="mx-auto mb-8 h-10 w-64" />
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Search families, parents, or dancers..."
          className="w-full pl-10"
          disabled
        />
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <Skeleton className="mx-auto h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
