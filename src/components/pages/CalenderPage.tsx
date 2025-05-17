import { getMonth } from 'date-fns'
import { CalendarHeader } from '../organisms/CalendarHeader'
import { CalendarBody } from '../organisms/CalendarBody'
import { useCalendar } from '../../hooks/useCalendar'

export const CalenderPage = () => {
  const today = new Date()
  const {dateList} = useCalendar({currentDate: today})

  return (
    <>
      <h1 className='font-bold text-3xl mb-5'>
        {`${(getMonth(today)) + 1}月`}
      </h1>
      <table className='w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed'>
        <CalendarHeader />
        <CalendarBody currentDate={today} dateList={dateList} />
      </table>
    </>
  )
}