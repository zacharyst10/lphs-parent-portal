import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full p-4">
      <Skeleton className="mb-4 h-8 w-64" />
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <Skeleton className="h-[80vh] w-full" />
      </div>
    </div>
  );
}
