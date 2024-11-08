import { Suspense } from "react";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user: any = await currentUser();
  if (!user) return;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen flex-col items-center justify-center">
        <iframe
          src="https://docs.google.com/spreadsheets/d/1sa_C_BQzoXyN-XrlgnQeSKUc3RXvAoFoHIZ5X3P0wnI/edit#gid=0"
          className="h-screen w-full"
        ></iframe>
      </div>
    </Suspense>
  );
}
