// array_test.js

var expect = require("chai").expect;

describe("Array", function () {

  describe("#indexOf", function () {

    it("should return the first index of a match", function () {
      var myArray = [1,2,3,3];
      expect(myArray.indexOf(3)).to.equal(2);
    });

  });
});