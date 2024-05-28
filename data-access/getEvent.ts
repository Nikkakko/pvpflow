import db from "@/lib/db";

export async function getLastEvent() {
  try {
    const event = await db.event.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    return event;
  } catch (error) {
    console.error("Error getting last event", error);
    return null;
  }
}
