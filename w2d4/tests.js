
describe("String.filter", function() {
  it('Expected output of "This house is not nice!".filter("not") is "This house is nice!" ',
    function() {
      assert.equal("This house is nice!", "This house is not nice!".filter("not"));
    }
  );
});

describe("Array.bubbleSort", function() {
  it("Expected output of [6,4,0, 3,-2,1].bubbleSort()) is [-2, 0, 1, 3, 4, 6] ",
    function() {
      assert.deepEqual([-2, 0, 1, 3, 4, 6], [6,4,0, 3,-2,1].bubbleSort());
    }
  );
});

describe("Teacher.teach", function() {
  it('Expected output of Teacher.initialize("Michael Zijlstra", 45) & Teacher.teach("MPP") is "Michael Zijlstra is now teaching MPP" ',
    function() {
      var myTeacher = new Teacher();
      myTeacher.initialize("Michael Zijlstra", 45);
      assert.equal("Michael Zijlstra is now teaching MPP", myTeacher.teach("MPP"));
    }
  );
});

describe("Student.learn", function() {
  it('Expected output of Student.initialize("John", 25) & Student.teach("Inheritance") is "John just learned Inheritance" ',
    function() {
      var me = new Student();
      me.initialize("John", 25);
      assert.equal("John just learned Inheritance", me.learn("Inheritance"));
  });
});
