import * as React from "react";
import { Skeleton } from "./ui/skeleton";

interface EventCardSkeletonProps {}

const EventCardSkeleton: React.FC<EventCardSkeletonProps> = ({}) => {
  return <Skeleton className="w-full h-96" />;
};

export default EventCardSkeleton;
