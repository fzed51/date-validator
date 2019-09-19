import { dateValidator } from "./index";

describe("Test de dateValidator", () => {
  test("valide a basic date 01/01/2000", () => {
    expect(dateValidator({ day: 1, month: 1, year: 2000 })).toBeTruthy();
  });

  test("valide a basic date 31/12/2000", () => {
    expect(dateValidator({ day: 31, month: 12, year: 2000 })).toBeTruthy();
  });

  test("valide a basic date without year 31/10", () => {
    expect(dateValidator({ day: 31, month: 10 })).toBeTruthy();
  });

  test("valide a basic date without day 01/2010", () => {
    expect(dateValidator({ month: 1, year: 2010 })).toBeTruthy();
  });

  test("not valide a out of range day 00/01/2000", () => {
    expect(dateValidator({ day: 0, month: 1, year: 2000 })).toBeFalsy();
  });

  test("not valide a out of range day 32/12/2000", () => {
    expect(dateValidator({ day: 32, month: 12, year: 2000 })).toBeFalsy();
  });

  test("not valide a out of range month 15/00/2000", () => {
    expect(dateValidator({ day: 15, month: 0, year: 2000 })).toBeFalsy();
  });

  test("not valide a out of range month 15/13/2000", () => {
    expect(dateValidator({ day: 15, month: 13, year: 2000 })).toBeFalsy();
  });

  test("valide a bissextile date 29/02/2000", () => {
    expect(dateValidator({ day: 29, month: 2, year: 2000 })).toBeTruthy();
  });

  test("valide a bissextile date without year 29/02", () => {
    expect(dateValidator({ day: 29, month: 2 })).toBeTruthy();
  });

  test("not valide a bissextile date 29/02/2001", () => {
    expect(dateValidator({ day: 29, month: 2, year: 2001 })).toBeFalsy();
  });
});
