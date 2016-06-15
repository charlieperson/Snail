describe("Snail", function() {

  it("basic 3x3 array can successfully be snailed", function(){
    var snail = new Snail();
    expect(snail.spiral([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
  });
});
