describe("max", function () {
  it("Expected output of max(10,90) is 90",
    function () {
      assert.equal(90, max(10, 90));
    });
  it("Expected output of max('123456',90) is 123456",
    function () {
      assert.equal(123456, max('123456',90));
    });
  it("Expected output of max('123456a',90) is 90",
    function () {
      assert.equal(90, max("123456a", 90));
    });
});

describe("maxOfThree", function () {
  it("Expected output of maxOfThree(5, 4, 44) is 44",
    function () {
      assert.equal(44, maxOfThree(5, 4, 44));
    });
  it("Expected output of maxOfThree(55,4,44) is 55",
    function () {
      assert.equal(55, maxOfThree(55,4,44));
    });
});

describe("maxOfThree", function () {
  it("Expected output of isVowel('a') is true",
    function () {
      assert.equal(true, isVowel('a'));
    });
  it("Expected output of isVowel('d') is false",
    function () {
      assert.equal(false, isVowel('d'));
    });
  it("Expected output of isVowel('abc') is false",
    function () {
      assert.equal(false, isVowel('abc'));
    });
});

describe("sum", function () {
  it("Expected output of sum([1,2,3,4]) is 10",
    function () {
      assert.equal(10, sum([1, 2, 3, 4]));
    });
  it("Expected output of sum() is 0",
    function () {
      assert.equal(0, sum());
    });
  it("Expected output of sum() is 0",
    function () {
      assert.equal(0, sum([]));
    });
});

describe("multiply", function () {
  it("Expected output of multiply([1,2,3,4]) is 24",
    function () {
      assert.equal(24, multiply([1, 2, 3, 4]));
    });
  it("Expected output of multiply([1,2,3,4,0]) is 0 ",
    function () {
      assert.equal(0, multiply([1,2,3,4,0]));
    });
  it("Expected output of multiply() is 0",
    function () {
      assert.equal(0, multiply());
    });
  it("Expected output of multiply([]) is 0",
    function () {
      assert.equal(0, multiply([]));
    });
});

describe("reverse", function () {
  it("Expected output of reverse('jag testar') is 'ratset gaj'",
    function () {
      assert.equal('ratset gaj', reverse('jag testar'));
    });
  it("Expected output of reverse('narT nauL aB') is 'Ba Luan Tran'",
    function () {
      assert.equal('Ba Luan Tran', reverse('narT nauL aB'));
    });

});

describe("findLongestWord", function () {
  it("Expected output of findLongestWord(['my', 'name', 'is', 'Ba', 'Luan', 'Tran']) is 4",
    function () {
      assert.equal(4, findLongestWord(['my', 'name', 'is', 'Ba', 'Luan', 'Tran']));
    });
  it("Expected output of findLongestWord([]) is 0",
    function () {
      assert.equal(0, findLongestWord([]));
    });

});

describe("filterLongWords", function () {
  it("Expected output of filterLongWords(null, 3) is []",
    function () {
      assert.deepEqual([], filterLongWords(null, 3));
    });
  it("Expected output of filterLongWords([], 3) is []",
    function () {
      assert.deepEqual([], filterLongWords([], 3));
    });
  it("Expected output of filterLongWords('test', 3) is []",
    function () {
      assert.deepEqual([], filterLongWords('test', 3));
    });
  it("Expected output of filterLongWords(['my', 'name', 'is', 'Ba', 'Luan', 'Tran'], 3) is ['name', 'Luan', 'Tran'], 3)",
    function () {
      assert.deepEqual(['name', 'Luan', 'Tran'], filterLongWords(['my', 'name', 'is', 'Ba', 'Luan', 'Tran'], 3));
    });
  it("Expected output of filterLongWords(['my', 'name', 'is', 'Ba', 'Luan', 'Tran'], 1)) is ['my', 'name', 'is', 'Ba', 'Luan', 'Tran'] ",
    function () {
      assert.deepEqual(['my', 'name', 'is', 'Ba', 'Luan', 'Tran'], filterLongWords(['my', 'name', 'is', 'Ba', 'Luan', 'Tran'], 1));
    });
    
});