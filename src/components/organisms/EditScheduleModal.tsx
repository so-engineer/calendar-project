import Modal from "react-modal";
import { NewSchedule, Schedule } from "../../types/calendar";
import { Input } from "../atoms/Input";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Textarea } from "../atoms/Textarea";
import { format, parse } from "date-fns";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

type PropsType = {
  isEditOpen: boolean
  closeModal: () => void
  closeEditModal: () => void
  selectedSchedule: Schedule
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

export const EditScheduleModal = ({
  isEditOpen,
  closeModal,
  closeEditModal,
  selectedSchedule,
  scheduleList,
  setScheduleList,
}: PropsType) => {
  const [newSchedule, setNewSchedule] = useState<NewSchedule>(
    {
      title: selectedSchedule.title,
      date: format(selectedSchedule.date, 'yyyy-MM-dd'),
      description: selectedSchedule.description,
    }
  );
  const [errorMessage, setErrorMessage] = useState('');

  const changeNewSchedule = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };

  const addSchedule = (selectedSchedule: Schedule, updatedSchedule: Schedule) => {
    const newScheduleList = scheduleList.map((schedule) => (
      schedule.id === selectedSchedule.id
      ? {
          ...schedule,
          id: updatedSchedule.id,
          title: updatedSchedule.title,
          description: updatedSchedule.description,
          date: updatedSchedule.date,
        }
      : schedule
    ))

    setScheduleList(newScheduleList)

  };

  const handleCreateSchedule = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newSchedule.title === '') {
      setErrorMessage('タイトルを入力してください');
      return;
    } else {
      setErrorMessage('');
    }

    const updatedSchedule = {
      ...selectedSchedule,
      ...newSchedule,
      date: parse(newSchedule.date, 'yyyy-MM-dd', new Date()),
    };

    addSchedule(selectedSchedule, updatedSchedule)
    closeEditModal()
    closeModal()
  };

  return (
    <Modal isOpen={isEditOpen} style={customStyles} onRequestClose={closeEditModal}>
      <div>
        <h3 className='text-center text-3xl text-lime-800 font-bold pb-5'>
          予定更新
        </h3>
        {errorMessage !== "" && (
          <div className="p-5 mb-5 bg-red-500 text-white text-center rounded-lg">
            {errorMessage}
          </div>
        )}
        <form className="flex flex-col gap-8" onSubmit={handleCreateSchedule}>
          <div className="w-[100%] flex items-center">
            <label htmlFor="title-form" className="w-[30%] text-lime-800">タイトル</label>
            <Input
              id="title-form"
              name="title"
              type="text"
              value={newSchedule.title}
              onChange={changeNewSchedule}
            />
          </div>
          <div className="w-[100%] flex items-center">
            <label htmlFor="date-form" className="w-[30%] text-lime-800">日付</label>
            <Input
              id="date-form"
              name="date"
              type="date"
              value={newSchedule.date}
              onChange={changeNewSchedule}
            />
          </div>
          <div className="w-[100%] flex items-center">
            <label htmlFor="description-form" className="w-[30%] text-lime-800">内容</label>
            <Textarea
                name="description"
                value={newSchedule.description}
                onChange={changeNewSchedule}
            />
          </div>
          <div className="flex justify-center">
            <PrimaryBtn size="lg" onClick={() => null}>
              更新
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </Modal>
  )
}