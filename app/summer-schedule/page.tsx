import React from "react";

interface AuditionEvent {
  title: string;
  details: string[];
}

interface AuditionsScheduleProps {
  events?: AuditionEvent[];
}

export default function AuditionsSchedule({ events }: AuditionsScheduleProps) {
  const defaultEvents: AuditionEvent[] = [
    {
      title: "Mandatory Parent Meeting",
      details: [
        "Date TBD",
        "Location TBD",
        "* Please note this meeting is mandatory for anyone who is auditioning for the team. We highly encourage the parent AND dancer to attend.",
      ],
    },
    {
      title: "Drill Audition Clinic",
      details: [
        "March 25th 5:00-9:00pm",
        "Maroon Gym",
        "Learn the audition combos",
      ],
    },
    {
      title: "Drill Auditions",
      details: [
        "March 26th 5:00-9:00pm",
        "Maroon Gym",
        "* Please note there will be a $10 audition fee.",
      ],
    },
    {
      title: "New Team Meeting",
      details: ["Date TBD (March 27th or April 7th)", "Time and location TBD"],
    },
  ];

  return (
    <div className="container bg-white py-10">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Auditions
          </p>
        </div>

        <div className="mx-auto mb-20 mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {defaultEvents.map((event, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-primary">
                  {event.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto font-bold">
                    {event.details.map((detail, detailIndex) => (
                      <React.Fragment key={detailIndex}>
                        {detail}
                        {detailIndex < event.details.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
