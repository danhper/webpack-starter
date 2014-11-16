var content = require('../src/content');

describe("a-test", function() {
  it("should run a test", function() {
    expect(content).to.eql('foo.js');
  });
});
