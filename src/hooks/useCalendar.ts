import { useEffect, useState } from 'react';
import {
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  startOfMonth,
} from 'date-fns';
import { DateList, Schedule } from '../types/calendar';
import { getScheduleList } from '../api/calendar';

type PropsType = {
  currentDate: Date;
};

export const useCalendar = ({ currentDate }: PropsType) => {
  const [dateList, setDateList] = useState<DateList>([]);

  useEffect(() => {
    const monthOfSundayList = eachWeekOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate),
    });
    // console.log(monthOfSundayList)
    const newDateList: DateList = monthOfSundayList.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      }).map((date) => ({ date, schedules: [] as Schedule[] }));
    });

    const scheduleList = getScheduleList();
    scheduleList.forEach((schedule) => {
      const firstIndex = newDateList.findIndex((oneWeek) =>
        oneWeek.some((item) => isSameDay(item.date, schedule.date))
      );
      if (firstIndex === -1) return;
      const secondIndex = newDateList[firstIndex].findIndex((item) =>
        isSameDay(item.date, schedule.date)
      );

      newDateList[firstIndex][secondIndex].schedules = [
        ...newDateList[firstIndex][secondIndex].schedules,
        schedule,
      ];
    });
    // console.log(newDateList)
    setDateList(newDateList);
  }, []);

  return {
    dateList,
  };
};
