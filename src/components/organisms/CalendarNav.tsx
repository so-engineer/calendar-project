import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { PrimaryBtn } from "../atoms/PrimaryBtn"
import { Dispatch, SetStateAction, useState } from "react"
import { addMonths } from "date-fns"
import { CreateScheduleModal } from "./CreateScheduleModal"

type PropsType = {
  setCurrentDate: Dispatch<SetStateAction<Date>>
}

export const CalendarNav = ({setCurrentDate}: PropsType) => {
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
        <PrimaryBtn size="sm" onClick={() => setIsOpen(true)}>
          今日
        </PrimaryBtn>
        <CreateScheduleModal isOpen={isOpen} closeModal={closeModal} />
        <FaArrowAltCircleRight
          className="text-lime-800 text-2xl"
          onClick={changeNextMonth}
        />
      </div>
    </div>
  )
}