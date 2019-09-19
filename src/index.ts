"use strict";

const isBissextile = (year?: number): boolean => {
  if (year === undefined) return true;
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) return true;
  else return false;
};

const nbDayInMonth = (month?: number, year?: number): number => {
  switch (month) {
    case 2:
      return isBissextile(year) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

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
