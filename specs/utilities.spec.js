const { calculateAverageScores } = require("../utilities/utilities");
const fs = require("fs");
const path = require("path");
const chai = require("chai");
const assert = chai.assert;

const users = fs.readFileSync(path.resolve(__dirname, "users.json"), {
  encoding: "UTF-8",
});

describe("Filter function: ", () => {
  const {
    averageTicketCreated,
    averageBackupsCreated,
  } = calculateAverageScores(JSON.parse(users));

  it("should filter by more than 5 tickets created", () => {
    assert.strictEqual(averageTicketCreated, 3.93);
    assert.strictEqual(averageBackupsCreated, 1.52);
  });
});
