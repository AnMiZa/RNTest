import {NativeModules} from 'react-native';

interface ICalendar {
  createCalendarEvent(name: string, location: string, startDate: string): void;
  getConstants(): string;
}

export const CalendarModule = NativeModules.CalendarModule as ICalendar;
