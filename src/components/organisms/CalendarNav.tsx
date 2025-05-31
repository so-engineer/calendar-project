import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { PrimaryBtn } from "../atoms/PrimaryBtn"
import { Dispatch, SetStateAction, useState } from "react"
import { addMonths } from "date-fns"
import { CreateScheduleModal } from "./CreateScheduleModal"
import { Schedule } from "../../types/calendar"

type PropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>
  addSchedule: (schedule: Schedule) => void
}

export const CalendarNav = ({setCurrentDate, addSchedule}: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  const changeToday = () => setCurrentDate(new Date())
  const changePrevMonth = () => setCurrentDate((prevDate) => addMonths(prevDate, -1))
  const changeNextMonth = () => setCurrentDate((prevDate) => addMonths(prevDate, 1))

  return (
    <div className="w-[80%] flex justify-between mb-2">
      <div className="flex items-center text-white gap-4">
        <FaArrowAltCircleLeft
          className="text-lime-800 text-2xl"
          onClick={changePrevMonth} 
        />
        <PrimaryBtn size="sm" onClick={changeToday}>
          今日
        </PrimaryBtn>
        <FaArrowAltCircleRight
          className="text-lime-800 text-2xl"
          onClick={changeNextMonth}
        />
      </div>
      <PrimaryBtn size="sm" onClick={() => setIsOpen(true)}>
        予定作成
      </PrimaryBtn>
      <CreateScheduleModal
        isOpen={isOpen}
        closeModal={closeModal}
        addSchedule={addSchedule}
      />
    </div>
  )
}