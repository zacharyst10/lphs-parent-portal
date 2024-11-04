"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, User, Ticket } from "lucide-react";
import { parse, compareAsc } from "date-fns";

interface Date {
  label: string;
  date: string;
}

interface Event {
  title: string;
  soloDate?: string;
  soloRegisterLink?: string;
  teamDate?: string;
  date?: string;
  location?: string;
  details?: string;
  dates?: Date[];
  ticketLink?: string;
}

export default function EventDashboard() {
  const [events] = useState<Event[]>([
    {
      title: "Premier Drill Classic at UVU",
      soloDate: "Friday, December 6th, 2024",
      soloRegisterLink: "https://form.jotform.com/61577363825161",
      teamDate: "Saturday, December 7th, 2024",
      ticketLink: "https://buy.stripe.com/8wMcMN30S44jeDm288",
    },
    {
      title: "SUU Thunderbird Invitational",
      soloDate: "Friday, December 13th, 2024",
      soloRegisterLink:
        "https://event.racereach.com/usg-drill-invite-solo/register?mark=001&app=index&xs=1727963262&context=1727962017&gcm=msite",
      teamDate: "Saturday, December 14th, 2024",
    },
    {
      title: "Rocky Mountain Drill Invitational",
      soloDate: "Friday, January 10th, 2025",
      soloRegisterLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdg_nEARQ7VNDnx_NTsNAz5D5-68URyGhwVW1-LJ0Cq4ELS8g/viewform",
      teamDate: "Saturday, January 11th, 2025",
    },
    {
      title: "Region",
      date: "Thursday, January 16th, 2025 at 6:00 PM",
      location: "Lehi High School",
    },
    {
      title: "State Championships",
      dates: [
        { label: "Quarterfinals", date: "Monday, January 27th, 2025 at UVU" },
        { label: "Semifinals", date: "Tuesday, January 28th, 2025 at UVU" },
        { label: "Finals", date: "Saturday, February 1st, 2025 at UVU" },
      ],
    },
    {
      title: "Nationals",
      date: "February 11-17, 2025",
      location: "Orlando, Florida",
      details: "Dance Team Union Nationals",
    },
  ]);

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const dateA = a.soloDate || a.date || a.dates?.[0].date || "";
      const dateB = b.soloDate || b.date || b.dates?.[0].date || "";
      return compareAsc(
        parse(dateA.split(" at")[0], "EEEE, MMMM do, yyyy", new Date()),
        parse(dateB.split(" at")[0], "EEEE, MMMM do, yyyy", new Date()),
      );
    });
  }, [events]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">Competition Information</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedEvents.map((event, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              {event.location && (
                <CardDescription className="mt-2 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  {event.location}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              {event.soloDate && (
                <div className="mb-4">
                  <div className="mb-2 flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span className="font-semibold">Solo Competition</span>
                  </div>
                  <div className="ml-6">
                    <div>{event.soloDate}</div>
                    {event.soloRegisterLink && (
                      <div className="mt-2">
                        <Button asChild variant="link" className="p-0">
                          <a
                            href={event.soloRegisterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Register for solos
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {event.teamDate && (
                <div className="mb-4">
                  <div className="mb-2 flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span className="font-semibold">Team Competition</span>
                  </div>
                  <div className="ml-6">{event.teamDate}</div>
                </div>
              )}
              {event.ticketLink && (
                <div className="mb-4">
                  <Button asChild variant="link" className="p-0">
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Ticket className="mr-2 h-5 w-5" />
                      Purchase tickets
                    </a>
                  </Button>
                </div>
              )}
              {event.date && (
                <div className="mb-4 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              )}
              {event.dates && (
                <div className="mb-4">
                  {event.dates.map((d, idx) => (
                    <div key={idx} className="mb-2 flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>
                        <strong>{d.label}:</strong> {d.date}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {event.details && (
                <div className="mt-2 text-sm text-muted-foreground">
                  {event.details}
                </div>
              )}
              <div className="mt-4 text-sm text-muted-foreground">
                {event.title === "Region"
                  ? "Ticket information will be available closer to the event date."
                  : "Additional information including schedule and competition details will be provided closer to the event."}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
