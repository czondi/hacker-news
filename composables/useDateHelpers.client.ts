import { formatDistanceToNow, format } from "date-fns";

export const relativeDate = (date: number) => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const absoluteDate = (date: number) => {
  return format(new Date(date), "dd/MM/yyyy 'at' HH:mm");
};
