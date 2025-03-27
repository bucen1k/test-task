export interface LiteraryEvent {
  date: string;
  description: string;
  isNobel?: boolean;
}

export interface TimePeriod {
  year: string;
  events: LiteraryEvent[];
}