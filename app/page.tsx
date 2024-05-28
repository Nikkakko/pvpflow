import * as React from "react";
import EventCard from "@/components/EventCard";
import { Shell } from "@/components/shell";
import { getLastEvent } from "@/data-access/getEvent";
import Image from "next/image";
import EventCardSkeleton from "@/components/EventCardSkeleton";

export default async function Home() {
  const event = await getLastEvent();
  return (
    <Shell className="" as="main" variant="wrapper">
      <React.Suspense fallback={<EventCardSkeleton />}>
        <EventCard event={event} />
      </React.Suspense>
    </Shell>
  );
}
