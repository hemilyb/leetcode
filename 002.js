// -------------------------------------------------------------
// 443. String Compression

var compress = function (chars) {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      count++;
      read++;
    }

    chars[write] = char;
    write++;
    if (count > 1) {
      for (let digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write;
};


// console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))
// -------------------------------------------------------------

const compressStr = (str) => {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result += str[i]
      if (count > 1) {
        result += count
      }
      count = 1
    }
  }
  return result

}
// console.log(compressStr("aaabbbccca"))

// -------------------------------------------------------------

const compressNumbers = (numbers) => {
  let result = []
  let count = 1

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      count++
    } else {
      result.push(numbers[i])
      result.push(count)
      count = 1
    }
  }
  return result
}

// console.log(compressNumbers([1, 1, 2, 3, 3, 3, 4]))

// -------------------------------------------------------------
const compressNames = (names) => {
  let r = []
  let c = 1

  for (let i = 0; i < names.length; i++) {
    if (names[i] === names[i + 1]) {
      c++
    } else {
      r.push(names[i])
      if (c > 1) {
        r.push(c)
      }
      c = 1
    }
  }
  return r
}

// console.log(compressNames(["John", "John", "Mary", "Mary", "Mary", "David"]))

// -------------------------------------------------------------

const charInGroups = (chars, t) => {
  let newArr = chars.split('')
  let arr = []

  for (let i = 0; i < newArr.length; i += t) {
    let gp = newArr.slice(i, i + t);
    arr.push(...gp.reverse())
  }
  return arr.join('')
}

// console.log(charInGroups("abcdefg", 4))

// -------------------------------------------------------------

const removeDuplicateChar = (str) => {
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(str[i])
    }
  }
  return arr.join('')
}

// console.log(removeDuplicateChar("aabbccdd"))

// -------------------------------------------------------------

const replaceSpaces = (str) => {
  return str.replace(/\s/g, "%20");
}

// console.log(replaceSpaces("Hello World! How are you?"))

// -------------------------------------------------------------

const countWords = (str) => {
  let st = str.split(' ')
  return st.length
}

// console.log(countWords("Hello, how are you doing?"))

// -------------------------------------------------------------

const strPalindrome = (str) => {
  let str1 = str.split('').reverse().join('')
  if (str1 === str) {
    return true
  }
  return false
}

// console.log(strPalindrome("racecar"))