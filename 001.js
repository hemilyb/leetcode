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

// -------------------------------------------------------------
// 605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let prev = flowerbed[i + 1] === undefined ? 0 : flowerbed[i + 1]
    let next = flowerbed[i - 1] === undefined ? 0 : flowerbed[i - 1]

    if (prev === 0 && next === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1
      n--
    }
  }
  return n <= 0

};

// console.log(canPlaceFlowers([0,0,1,0,1], 1))

// -------------------------------------------------------------
// 345. Reverse Vowels of a String

var reverseVowels = function (s) {
  let vr = [];
  let vowels = "aeiouAEIOU"
  let newStr = []
  let j = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vr.push(s[i])
    }
  }

  vr.reverse()

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      newStr.push(vr[j])
      j++
    } else {
      newStr.push(s[i])
    }
  }

  return newStr.join('')
};

// console.log(reverseVowels("IceCreAm"))

// -------------------------------------------------------------
// 151. Reverse Words in a String

var reverseWords = function (s) {
  let a = s.trim().split(/\s+/);

  return a.reverse().join(' ')

};

// console.log(reverseWords("a good   example"))
// -------------------------------------------------------------
// 238. Product of Array Except Self

var productExceptSelf = function (nums) {
  let newarr = []
  let left = 1

  for (let i = 0; i < nums.length; i++) {
    newarr[i] = left;
    left *= nums[i];
  };

  // newarr = [1, 1, 2, 6]

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    newarr[i] *= right;
    right *= nums[i];
  }
  return newarr
}

// console.log(productExceptSelf([1, 2, 3, 4]))

// -------------------------------------------------------------
// 334. Increasing Triplet Subsequence

// 3 consecutive checks where i < j < k is true
var increasingTriplet = function (nums) {
  let aa = false
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
      aa = true
    }
  }

  return aa
};

// console.log(increasingTriplet([2,1,5,0,4,6]))