import assert from "assert";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });


    it('should return correct index when value is present',function(){
        assert.equal([1,2,3].indexOf(3),2);
    })


    it('should return 0 when first element is searched',function(){
        assert.equal([1,2,3].indexOf(1),0)
    })

  });
});
