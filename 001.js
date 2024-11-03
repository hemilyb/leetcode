// 1768. Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  let arr = []
  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i] !== undefined) {
      word1.split(' ')
      arr.push(word1[i])
    }

    if (word2[i] !== undefined) {
      word2.split(' ')
      arr.push(word2[i])
    }
  }
  return arr.join('')
};

// console.log(mergeAlternately("ab", "pqrs"))

// -------------------------------------------------------------
// 1071. Greatest Common Divisor of Strings

var gcdOfStrings = function (str1, str2) {
  let a = str1.length;
  let b = str2.length;
  if (str1 + str2 !== str2 + str1) return '';
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return str1.substring(0, a)
};

// console.log(gcdOfStrings("ABABAB", "ABAB"))

// -------------------------------------------------------------
// 1431. Crianças com o maior número de doces

var kidsWithCandies = function (candies, extraCandies) {
  let value = [];
  let maior = Math.max(...candies)
  for (let i = 0; i < candies.length; i++) {

    if (candies[i] + extraCandies >= maior) {
      value.push(true)
    } else {
      value.push(false)
    }

  }
  return value
};

// console.log(kidsWithCandies([2,3,5,1,3], 3))