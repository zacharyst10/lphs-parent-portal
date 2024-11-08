import { currentUser } from "@clerk/nextjs/server";
import GoogleSheetEmbed from "@/components/google-sheet-iframe";

export default async function Home() {
  const user: any = await currentUser();
  if (!user) return;
  return (
    <GoogleSheetEmbed src="https://docs.google.com/spreadsheets/d/1sa_C_BQzoXyN-XrlgnQeSKUc3RXvAoFoHIZ5X3P0wnI/edit#gid=0" />
  );
}
