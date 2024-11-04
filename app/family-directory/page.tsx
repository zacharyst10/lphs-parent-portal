"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import allan from "@/public/families/allan-family.jpg";
import allen from "@/public/families/allen-family.jpg";
import arnold from "@/public/families/arnold-family.jpg";
import cormier from "@/public/families/cormier-family.jpg";
import dahl from "@/public/families/dahl-family.jpg";
import esplin from "@/public/families/esplin-family.jpg";
import green from "@/public/families/green-family.jpg";
import hilton from "@/public/families/hilton-family.jpg";
import jones from "@/public/families/jones-family.jpg";
import krog from "@/public/families/krog-family.jpg";
import leroy from "@/public/families/leroy-family.jpg";
import lopez from "@/public/families/lopez-family.jpg";
import maughan from "@/public/families/maughan-family.jpg";
import smithB from "@/public/families/smith-b-family.jpg";
import smith from "@/public/families/smith-family.jpg";
import taylor from "@/public/families/taylor-family.jpg";
import wallace from "@/public/families/wallace-family.jpg";
import ward from "@/public/families/ward-family.png";
import earnshaw from "@/public/families/earnshaw-family.jpg";
import liechty from "@/public/families/liechty-family.jpg";
import nicol from "@/public/families/nicol-family.jpg";
import owens from "@/public/families/owens-family.jpg";
import pearson from "@/public/families/pearson-family.jpg";
import shaw from "@/public/families/shaw-family.jpg";
import zurcher from "@/public/families/zurcher-family.jpg";

const families = [
  {
    id: "allan",
    family: "Allan Family",
    mom: "Jennifer Allan",
    dad: "Michael Allan",
    dancer: "Aubrey Allan",
    image: allan,
  },
  {
    id: "allen",
    family: "Allen Family",
    mom: "Kristin Allen",
    dad: "Brandon Allen",
    dancer: "Marina Allen",
    image: allen,
  },
  {
    id: "arnold",
    family: "Arnold Family",
    mom: "Mackenzie Arnold",
    dad: "Brig Arnold",
    dancer: "Cate Arnold",
    image: arnold,
  },
  {
    id: "cormier",
    family: "Cormier Family",
    mom: "Sheryl Cormier",
    dad: "Lee Cormier",
    dancer: "Brittney Cormier",
    image: cormier,
  },
  {
    id: "dahl",
    family: "Dahl Family",
    mom: "Alicia Dahl",
    dad: "Eric Dahl",
    dancer: "Micah Dahl",
    image: dahl,
  },
  {
    id: "earnshaw",
    family: "Earnshaw Family",
    mom: "",
    dad: "",
    dancer: "Avonlea Earnshaw",
    image: earnshaw,
  },

  {
    id: "esplin",
    family: "Esplin Family",
    mom: "Shannon Esplin",
    dad: "Jeff Esplin",
    dancer: "Kate Esplin",
    image: esplin,
  },
  {
    id: "green",
    family: "Green Family",
    mom: "Aleece Green",
    dad: "Jeremy Green",
    dancer: "Aiden Green",
    image: green,
  },
  {
    id: "hilton",
    family: "Hilton Family",
    mom: "Alicia Hilton",
    dad: "Glen Hilton",
    dancer: "Serena Hilton",
    image: hilton,
  },
  {
    id: "jones",
    family: "Jones Family",
    mom: "Melissa Jones",
    dad: "Brady Jones",
    dancer: "Avery Jones",
    image: jones,
  },
  {
    id: "krog",
    family: "Krog Family",
    mom: "Angie Krog",
    dad: "Mike Krog",
    dancer: "Katie Krog",
    image: krog,
  },

  {
    id: "leroy",
    family: "LeRoy Family",
    mom: "Andrea LeRoy",
    dad: "Brandon LeRoy",
    dancer: "Gwen LeRoy",
    image: leroy,
  },
  {
    id: "liechty",
    family: "Liechty Family",
    mom: "",
    dad: "",
    dancer: "Hannah  Liechty",
    image: liechty,
  },

  {
    id: "lopez",
    family: "Lopez Family",
    mom: "",
    dad: "Scott Lopez",
    dancer: "Haylee Lopez",
    image: lopez,
  },
  {
    id: "maughan",
    family: "Maughan Family",
    mom: "Nicole Maughan",
    dad: "Weston Maughan",
    dancer: "Mikayla Maughan",
    image: maughan,
  },
  {
    id: "nicol",
    family: "Nicol Family",
    mom: "",
    dad: "",
    dancer: "Chloe Nicol",
    image: nicol,
  },
  {
    id: "owens",
    family: "Owens Family",
    mom: "",
    dad: "",
    dancer: "Hadlee Owens",
    image: owens,
  },
  {
    id: "pearson",
    family: "Pearson Family",
    mom: "",
    dad: "",
    dancer: "Kambri  Pearson",
    image: pearson,
  },
  {
    id: "shaw",
    family: "Shaw Family",
    mom: "",
    dad: "",
    dancer: "Lily Shaw",
    image: shaw,
  },
  {
    id: "smith-b",
    family: "Smith Family (Brooklyn)",
    mom: "Lindsay Smith",
    dad: "Colton Smith",
    dancer: "Brooklyn Smith",
    image: smithB,
  },
  {
    id: "smith-t",
    family: "Smith Family (Tessa + Mollie)",
    mom: "Lynsie Smith",
    dad: "Nathan Smith",
    dancer: "Tessa + Mollie Smith",
    image: smith,
  },

  {
    id: "taylor",
    family: "Taylor Family",
    mom: "Chandler Taylor",
    dad: "Chip Taylor",
    dancer: "Mayzie Taylor",
    image: taylor,
  },
  {
    id: "wallace",
    family: "Wallace Family",
    mom: "Jennie Wallace",
    dad: "Landon Wallace",
    dancer: "Quinlan Wallace",
    image: wallace,
  },
  {
    id: "ward",
    family: "Ward Family",
    mom: "Tara Ward",
    dad: "Jon Ward",
    dancer: "Kate & Sophie Ward",
    image: ward,
  },
  {
    id: "zurcher",
    family: "Zurcher Family",
    mom: "",
    dad: "",
    dancer: "Katie Zurcher",
    image: zurcher,
  },
];

export default function FamilyGallery() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFamilies = useMemo(() => {
    return families.filter(
      (family) =>
        family.family.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.mom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.dad.toLowerCase().includes(searchTerm.toLowerCase()) ||
        family.dancer.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Family Gallery</h1>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
        <Input
          type="text"
          placeholder="Search families, parents, or dancers..."
          className="w-full pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filteredFamilies.map((family) => (
          <Dialog key={family.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer transition-transform hover:scale-105">
                <Image
                  src={family.image}
                  alt={family.family}
                  placeholder="blur"
                  className="aspect-square rounded-lg object-cover"
                />
                <p className="mt-2 text-center font-medium">{family.family}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {family.family}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={family.image}
                    alt={family.family}
                    className="h-full w-full object-cover"
                  />
                </div>
                <ScrollArea className="h-[200px] rounded-md border p-4">
                  <DialogDescription className="space-y-2 text-lg">
                    <p>
                      <span className="font-semibold">Dad:</span> {family.dad}
                    </p>
                    <p>
                      <span className="font-semibold">Mom:</span> {family.mom}
                    </p>
                    <p>
                      <span className="font-semibold">Dancer:</span>{" "}
                      {family.dancer}
                    </p>
                  </DialogDescription>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
