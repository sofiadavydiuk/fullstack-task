import { getSortFunc } from "./Utilities";

const dates = ["2002-03-11", "2005-12-23"];

test("sort test by newest", () => {
  expect(dates.sort(getSortFunc("newest"))).toBe(["2005-12-23", "2002-03-11"]);
});

test("sort test by oldest", () => {
  expect(dates.sort(getSortFunc("oldest"))).toBe(["2002-03-11", "2005-12-23"]);
});


