describe("Snail", function() {

  it("can successfully snail a 3x3 array", function(){
    var snail = new Snail();
    expect(snail.spiral([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
  });

  it("can successfully snail a 4x4 array", function(){
    var snail = new Snail();
    expect(snail.spiral([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]])).toEqual([1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]);
  });
});
