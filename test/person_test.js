var Person = require("../person"),
  expect = require("chai").expect;


describe("Person", function () {
  describe("hasOwnProperties", function () {
    it("should include a name", function () {
      var person = new Person("john");
      expect(person.hasOwnProperty("name")).to.equal(true);
    })
  });
})