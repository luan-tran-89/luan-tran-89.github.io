/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}

/* that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
function isVowel(a) {
  if (!a || typeof a !== 'string' || a.length != 1) {
    return false;
  }
  return ['u', 'e', 'o', 'a', 'i'].some(function (s) {
    return s === a.toLocaleLowerCase()
  });
}

/* that sums (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10 */
function sum(arr) {
  return !arr ? 0 : arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

/* that multiplies (respectively) all the numbers in an array of numbers. For example, multiply([1,2,3,4]) should return 24. */
function multiply(arr) {
  return (!arr || !Array.isArray(arr) || arr.length == 0) ? 0 : arr.reduce(function (a, b) {
    return a * b;
  }, 1);
}

/* that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
function reverse(text) {
  if (!text) {
    return text;
  }
  return text.split('').reverse().reduce(function(a, b) {
    return a + b;
  }, '');
}

/* that takes an array of words and returns the length of the longest one. */
function findLongestWord(arr) {
  if (!arr || arr.length == 0) {
    return 0;
  }
  let longestWord = arr[0].length;

  for (let i=0 ; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i+1].length) {
      longestWord = arr[i+1].length;
    }
  }

  return longestWord;
}

/* that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(arr, i) {
  if (!arr || !Array.isArray(arr) || arr.length == 0) {
    return [];
  }

  if (i < 0) {
    return arr;
  }

  return arr.filter(function (a) {
    return a.length > i;
  });
}
