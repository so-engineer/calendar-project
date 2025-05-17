import { getDate } from 'date-fns'
import { dateColor } from '../../libs/date'
import { DateList } from '../../types/calendar'
import { ScheduleBtn } from '../atoms/ScheduleBtn'

type PropsType = {
  currentDate: Date
  dateList: DateList
}

export const CalendarBody = ({currentDate, dateList}: PropsType) => {
  return (
    <tbody>
      {dateList.map((oneWeek) => (
        <tr key={`week-${getDate(oneWeek[0].date)}`} className='mx-10'>
          {oneWeek.map((item) => (
            <td key={`day-${getDate(oneWeek[0].date)}`} className='bg-white h-[10vh] border-2 border-solid border-lime-800'>
              <span className={`inline-block w-[20px] leading-[20px] text-center ${dateColor(
                  item.date,
                  currentDate
                )}`}>
                {getDate(item.date)}
              </span>
              <div className='flex flex-col items-center gap-1 pb-2'>
                {item.schedules.map((schedule) => (
                  <ScheduleBtn key={schedule.id}>
                    {schedule.title}
                  </ScheduleBtn>
                ))}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
