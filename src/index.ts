import { nbDayInMonth } from "./lib";

export interface iDateTestable {
  day?: number;
  month?: number;
  year?: number;
}

export const dateValidator = ({ day, month, year }: iDateTestable): boolean => {
  const dayDefined = day !== undefined;
  const monthDefined = month !== undefined;
  const yearDefined = year !== undefined;

  if (monthDefined && (month > 12 || month < 1)) {
    return false;
  }
  if (dayDefined && (day > nbDayInMonth(month, year) || month < 1)) {
    return false;
  }
  return true;
};
