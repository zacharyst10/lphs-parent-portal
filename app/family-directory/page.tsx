"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import allan from "@/public/families/allan-family.jpg";
import allen from "@/public/families/allen-family.jpg";
import arnold from "@/public/families/arnold-family.jpg";
import cormier from "@/public/families/cormier-family.jpg";
import dahl from "@/public/families/dahl-family.jpg";
import esplin from "@/public/families/esplin-family.jpg";
import green from "@/public/families/green-family.jpg";
import harrison from "@/public/families/harrison-family.jpg";
import hilton from "@/public/families/hilton-family.jpg";
import jones from "@/public/families/jones-family.jpg";
import krog from "@/public/families/krog-family.jpg";
import lebaron from "@/public/families/lebaron-family.jpg";
import leroy from "@/public/families/leroy-family.jpg";
import lopez from "@/public/families/lopez-family.jpg";
import maughan from "@/public/families/maughan-family.jpg";
import mccracken from "@/public/families/mcckraken-family.jpg";
import paskett from "@/public/families/paskett-family.jpg";
import smithB from "@/public/families/smith-b-family.jpg";
import smith from "@/public/families/smith-family.jpg";
import sonntag from "@/public/families/sonntag-family.jpg";
import taylor from "@/public/families/taylor-family.jpg";
import wallace from "@/public/families/wallace-family.jpg";
import ward from "@/public/families/ward-family.png";
import { Search } from "lucide-react";
import { useState } from "react";

const families = [
  {
    family: "Allan Family",
    mom: "Jennifer Allan",
    dad: "Michael Allan",
    dancer: "Aubrey Allan",
    image: allan,
  },
  {
    family: "Allen Family",
    mom: "Kristin Allen",
    dad: "Brandon Allen",
    dancer: "Marina Allen",
    image: allen,
  },
  {
    family: "Arnold Family",
    mom: "Mackenzie Arnold",
    dad: "Brig Arnold",
    dancer: "Cate Arnold",
    image: arnold,
  },

  {
    family: "Cormier Family",
    mom: "Sheryl Cormier",
    dad: "Lee Cormier",
    dancer: "Brittney Cormier",
    image: cormier,
  },
  {
    family: "Dahl Family",
    mom: "Alicia Dahl",
    dad: "Eric Dahl",
    dancer: "Micah Dahl",
    image: dahl,
  },
  {
    family: "Esplin Family",
    mom: "Shannon Esplin",
    dad: "Jeff Esplin",
    dancer: "Kate Esplin",
    image: esplin,
  },
  {
    family: "Green Family",
    mom: "Aleece Green",
    dad: "Jeremy Green",
    dancer: "Aiden Green",
    image: green,
  },
  {
    family: "Harrison Family",
    mom: "Toni Harrison",
    dad: "Mason Harrison",
    dancer: "Ellie & Brynlee Harrison",
    image: harrison,
  },

  {
    family: "Hilton Family",
    mom: "Alicia Hilton",
    dad: "Glen Hilton",
    dancer: "Serena Hilton",
    image: hilton,
  },
  {
    family: "Jones Family",
    mom: "Melissa Jones",
    dad: "Brady Jones",
    dancer: "Avery Jones",
    image: jones,
  },
  {
    family: "Krog Family",
    mom: "Angie Krog",
    dad: "Mike Krog",
    dancer: "Katie Krog",
    image: krog,
  },
  {
    family: "LeBaron Family",
    mom: "Sarah LeBaron",
    dad: "Mike LeBaron",
    dancer: "Bella LeBaron",
    image: lebaron,
  },
  {
    family: "LeRoy Family",
    mom: "Andrea LeRoy",
    dad: "Brandon LeRoy",
    dancer: "Gwen LeRoy",
    image: leroy,
  },
  {
    family: "Lopez Family",
    mom: "",
    dad: "Scott Lopez",
    dancer: "Haylee Lopez",
    image: lopez,
  },
  {
    family: "Maughan Family",
    mom: "Nicole Maughan",
    dad: "Weston Maughan",
    dancer: "Mikayla Maughan",
    image: maughan,
  },
  {
    family: "McCracken Family",
    mom: "Liana McCracken",
    dad: "Miles McCracken",
    dancer: "Camille McCracken",
    image: mccracken,
  },
  {
    family: "Paskett Family",
    mom: "Shelley Paskett",
    dad: "John Paskett",
    dancer: "Emma Paskett",
    image: paskett,
  },
  {
    family: "Smith Family",
    mom: "Lindsay Smith",
    dad: "Colton Smith",
    dancer: "Brooklyn Smith",
    image: smithB,
  },
  {
    family: "Smith Family",
    mom: "Lynsie Smith",
    dad: "Nathan Smith",
    dancer: "Tessa Smith",
    image: smith,
  },

  {
    family: "McQuivey Family",
    mom: "Pollina McQuivey",
    dad: "Ryan McQuivey",
    dancer: "Kaitlyn Sonntag",
    image: sonntag,
  },

  {
    family: "Taylor Family",
    mom: "Chandler Taylor",
    dad: "Chip Taylor",
    dancer: "Mayzie Taylor",
    image: taylor,
  },
  {
    family: "Wallace Family",
    mom: "Jennie Wallace",
    dad: "Landon Wallace",
    dancer: "Quinlan Wallace",
    image: wallace,
  },
  {
    family: "Ward Family",
    mom: "Tara Ward",
    dad: "Jon Ward",
    dancer: "Kate & Sophie Ward",
    image: ward,
  },
];

export default function DialogDemo() {
  return (
    <div>
      <div className="grid grid-cols-4 items-center gap-4 p-4">
        {families.map((family) => (
          <div key={family.family}>
            <Dialog>
              <DialogTrigger asChild>
                <Image
                  src={family.image}
                  alt={family.family}
                  placeholder="blur"
                  className="h-64 w-64 rounded-2xl object-cover"
                />
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>{family.family}</DialogTitle>
                  <DialogDescription className="flex flex-col gap-2">
                    <div>{family.dad}</div>
                    <div>{family.mom}</div>
                    <div>{family.dancer}</div>
                  </DialogDescription>
                </DialogHeader>

                <Image
                  className="h-full w-full"
                  src={family.image}
                  alt={family.family}
                />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
