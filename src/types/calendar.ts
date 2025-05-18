export type Schedule = {
  id: number;
  date: Date;
  title: string;
  description: string;
};

export type DateList = {
  date: Date;
  schedules: Schedule[];
}[][];

export type NewSchedule = {
  title: string;
  date: string;
  description: string;
};
