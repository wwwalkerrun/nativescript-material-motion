var MaterialMotion = require("nativescript-material-motion").MaterialMotion;
var materialMotion = new MaterialMotion();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(materialMotion.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(materialMotion.functionname()).toEqual(jasmine.any(Promise));
  });
});