import { getMonth } from 'date-fns'
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'
import { useCalendar } from '../../hooks/useCalendar'
import { CalendarNav } from '../organisms/CalendarNav'
import { Schedule } from '../../types/calendar'
import { getScheduleList } from '../../api/calendar'
import { useState } from 'react'

export const CalenderPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [scheduleList, setScheduleList] = useState<Schedule[]>(getScheduleList())
  const {dateList, addSchedule} = useCalendar({currentDate, scheduleList, setScheduleList})

  return (
    <>
      <h1 className='font-bold text-3xl mb-5'>
        {`${getMonth(currentDate) + 1}月`}
      </h1>
      <CalendarNav setCurrentDate={setCurrentDate} addSchedule={addSchedule} />
      <table className='w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed'>
        <CalendarHeader />
        <CalendarBody
          currentDate={currentDate}
          dateList={dateList}
          // setDateList={setDateList}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
        />
      </table>
    </>
  )
}