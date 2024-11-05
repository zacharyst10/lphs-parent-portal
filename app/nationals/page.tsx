import Image from "next/image";
import nationals from "@/public/nationals-itinerary.png";

export default function NationalsPage() {
  return (
    <div className="">
      <Image src={nationals} alt="Nationals" width={1200} height={800} />
    </div>
  );
}
