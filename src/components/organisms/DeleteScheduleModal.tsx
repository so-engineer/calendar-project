import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  isDeleteOpen: boolean
  closeModal: () => void
  closeDeleteModal: () => void
  selectedSchedule: Schedule
  // dateList: DateList
  // setDateList: Dispatch<SetStateAction<DateList>>
  scheduleList: Schedule[]
  setScheduleList: Dispatch<SetStateAction<Schedule[]>>
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    height: "50vh",
    transform: "translate(-50%, -50%)",
  }
}

export const DeleteScheduleModal = ({
  isDeleteOpen,
  closeModal,
  closeDeleteModal,
  selectedSchedule,
  // dateList,
  // setDateList,
  scheduleList,
  setScheduleList,
}: PropsType) => {

  const onClickDelete = (selectedSchedule: Schedule) => {
    // const newDateList = dateList.map(week => 
    //   week.map(day => ({
    //     ...day,
    //     schedules: day.schedules.filter(schedule => schedule.id !== selectedSchedule.id)
    //   }))
    // )
    // setDateList(newDateList)
    const newScheduleList = scheduleList.filter(schedule => schedule.id !== selectedSchedule.id)
    setScheduleList(newScheduleList)
    closeDeleteModal()
    closeModal()
  }

  return (
    <Modal isOpen={isDeleteOpen} style={customStyles} onRequestClose={closeDeleteModal}>
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-center text-xl mb-5">
          本当に削除しますか？
        </p>
        <div className="flex justify-center gap-8 mt-5">
          <PrimaryBtn size="lg" onClick={() => onClickDelete(selectedSchedule)}>
            はい
          </PrimaryBtn>
          <PrimaryBtn size="lg" onClick={() => closeDeleteModal()}>
            いいえ
          </PrimaryBtn>
        </div>
      </div>
    </Modal>
  )
}