import { isSameMonth, isToday } from 'date-fns';

export const dateColor = (targetDate: Date, currentDate: Date) => {
  if (isToday(targetDate)) return 'bg-lime-800 text-white rounded-full';
  return isSameMonth(targetDate, currentDate) ? 'text-black' : 'text-gray-300';
};
