import { useContext, useEffect, useState } from 'react'
import { LoginUserContext } from '../../contexts/LoginUserContext'
import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, getDate, getMonth, startOfMonth } from 'date-fns'
import { DAYS_LIST } from '../../constants/calendar'

export const CalenderPage = () => {
  const today = new Date()
  const [dateList, setDateList] = useState<Date[][]>([])
  const {loginUser} = useContext(LoginUserContext)

  useEffect(() => {
    const monthOfSundayList = eachWeekOfInterval({
      start: startOfMonth(today),
      end: endOfMonth(today),
    })
    // console.log(monthOfSundayList)
    const newDateList: Date[][] = monthOfSundayList.map((date) => {
      return eachDayOfInterval({
        start: date,
        end: endOfWeek(date),
      })
    })
    // console.log(newDateList)
    setDateList(newDateList)
  }, [])

  return (
    <>
      <h1 className='font-bold text-3xl mb-5'>
        {`${(getMonth(today)) + 1}月`}
      </h1>
      <table className='w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed'>
        <thead>
          <tr className='bg-lime-800 text-white rounded-tl-lg rounded-tr-lg py-10'>
            {DAYS_LIST.map((day) => (
              <th key={day} className='text-center text-xl py-3'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dateList.map((oneWeek) => (
            <tr key={`week-${getDate(oneWeek[0])}`} className='mx-10'>
              {oneWeek.map((item) => (
                <td key={`day-${getDate(item)}`} className='bg-white h-[10vh] border-2 border-solid border-lime-800'>
                  <span className='inline-block w-[20px] leading-[20px] text-center'>
                    {getDate(item)}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}