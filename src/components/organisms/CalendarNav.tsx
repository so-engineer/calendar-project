import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import { PrimaryBtn } from "../atoms/PrimaryBtn"

export const CalendarNav = () => {
  return (
    <div className="w-[80%] flex justify-between mb-2">
      <div className="flex items-center text-white gap-4">
        <FaArrowAltCircleLeft className="text-lime-800 text-2xl" />
        <PrimaryBtn size="sm" onClick={() => null}>
          今日
        </PrimaryBtn>
        <FaArrowAltCircleRight className="text-lime-800 text-2xl" />
      </div>
    </div>
  )
}