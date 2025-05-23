import Modal from "react-modal";
import { Schedule } from "../../types/calendar";
import { format } from "date-fns";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { Dispatch, SetStateAction, useState } from "react";
import { EditScheduleModal } from "./EditScheduleModal";
import { DeleteScheduleModal } from "./DeleteScheduleModal";

type PropsType = {
  closeModal: () => void;
  selectedSchedule: Schedule | null;
  // dateList: DateList
  // setDateList: Dispatch<SetStateAction<DateList>>
  scheduleList: Schedule[]
  setScheduleList: Dispatch<SetStateAction<Schedule[]>>
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    transform: "translate(-50%, -50%)",
  },
};

export const ScheduleDetailModal = ({
  closeModal,
  selectedSchedule,
  // dateList,
  // setDateList,
  scheduleList,
  setScheduleList,
}: PropsType) => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const closeEditModal = () => setIsEditOpen(false)
  const closeDeleteModal = () => setIsDeleteOpen(false)

  return (
    <>
      <Modal
        isOpen={!!selectedSchedule}
        style={customStyles}
        onRequestClose={closeModal}
      >
        {selectedSchedule && (
          <>
            <div className="flex flex-col gap-8">
              <h3 className="text-center text-3xl text-lime-800 font-bold pb-5">
                {selectedSchedule.title}
              </h3>
              <p>{format(selectedSchedule.date, "yyyy年M月d日")}</p>
              <p>{selectedSchedule.description}</p>
            </div>
            <div className="flex justify-center gap-8 mt-3">
              <PrimaryBtn size="lg" onClick={() => setIsEditOpen(true)}>
                編集
              </PrimaryBtn>
              <PrimaryBtn size="lg" onClick={() => setIsDeleteOpen(true)}>
                削除
              </PrimaryBtn>
            </div>
          </>
        )}
      </Modal>

      {selectedSchedule && (
        <EditScheduleModal
          isEditOpen={isEditOpen}
          closeModal={closeModal}
          closeEditModal={closeEditModal}
          selectedSchedule={selectedSchedule}
          // dateList={dateList}
          // setDateList={setDateList}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
        />
      )}

      {selectedSchedule && (
        <DeleteScheduleModal
          isDeleteOpen={isDeleteOpen}
          closeModal={closeModal}
          closeDeleteModal={closeDeleteModal}
          selectedSchedule={selectedSchedule}
          // dateList={dateList}
          // setDateList={setDateList}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
        />
      )}
    </>
  );
};