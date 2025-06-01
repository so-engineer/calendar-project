import { getDate } from 'date-fns'
import { dateColor } from '../../libs/date'
import { DateList, Schedule } from '../../types/calendar'
import { ScheduleBtn } from '../atoms/ScheduleBtn'
import { ScheduleDetailModal } from './ScheduleDetailModal'
import { useState, Dispatch, SetStateAction } from 'react'

type PropsType = {
  currentDate: Date
  dateList: DateList
  scheduleList: Schedule[]
  setScheduleList: Dispatch<SetStateAction<Schedule[]>>
}

export const CalendarBody = ({
  currentDate,
  dateList,
  scheduleList,
  setScheduleList
}: PropsType) => {
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(
    null
  )
  const closeModal = () => setSelectedSchedule(null)

  return (
    <>
      <tbody>
        {dateList.map((oneWeek, weekIndex) => (
          <tr key={`week-${weekIndex}`} className='mx-10'>
            {oneWeek.map((item, dayIndex) => (
              <td key={`day-${weekIndex}-${dayIndex}`} className='bg-white h-[10vh] border-2 border-solid border-lime-800'>
                <span className={`inline-block w-[20px] leading-[20px] text-center ${dateColor(
                    item.date,
                    currentDate
                  )}`}>
                  {getDate(item.date)}
                </span>
                <div className='flex flex-col items-center gap-1 pb-2'>
                  {item.schedules.map((schedule) => (
                    <ScheduleBtn key={schedule.id} onClick={() => setSelectedSchedule(schedule)}>
                      {schedule.title}
                    </ScheduleBtn>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <ScheduleDetailModal
        closeModal={closeModal}
        selectedSchedule={selectedSchedule}
        scheduleList={scheduleList}
        setScheduleList={setScheduleList}
      />
    </>
  )
}