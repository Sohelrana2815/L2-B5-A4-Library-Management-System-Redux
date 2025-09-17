import { formatDistanceToNow } from "date-fns";

export const formatRelativeTime = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
    console.log("Error formatting date:", error);
    return "Date not available";
  }
};
