import { Event } from "@prisma/client";
import Image from "next/image";
import * as React from "react";

interface EventCardProps {
  event: Event | null;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const dummyEvent = {
    id: "1",
    title: "Event Title",
    description: "Event Description",
    imageUrl: "/assets/placeholder.png",
    createdAt: new Date(),
    endDate: new Date(),
    location: "Event Location",
  };
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full h-96 relative">
      <Image
        src={event?.imageUrl || dummyEvent.imageUrl}
        alt={event?.title || dummyEvent.title}
        fill
        className="object-cover w-full h-60"
      />
      <div
        className="p-4
        absolute
        bottom-0
        left-0
        right-0
        bg-white
        bg-opacity-50
        backdrop-filter
        backdrop-blur-lg
        text-black
        
      "
      >
        <h2 className="text-xl font-semibold">
          {event?.title || dummyEvent.title}
        </h2>
        <p className="text-sm">{event?.location || dummyEvent.location}</p>
        <p className="text-sm">
          {event?.description || dummyEvent.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
