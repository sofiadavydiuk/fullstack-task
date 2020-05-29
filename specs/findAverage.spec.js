const { findAverage } = require("../utilities/utilities");
const chai = require("chai");
const expect = chai.expect;
const users = require("../routes/users.json");
const newUsers = require("./newUsers");

describe("Test Average", () => {
  it("Test the findAverage method", function () {
    expect(findAverage(users).to.be.equal(newUsers));
  });
});
