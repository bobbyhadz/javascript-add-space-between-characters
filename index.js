// EXAMPLE 1 - Add a Space between the Characters of a String in JavaScript

function addSpace(str) {
  return str.split('').join(' ');
}

const result1 = addSpace('apple');
console.log(result1); // 👉️ a p p l e

const result2 = addSpace('pear');
console.log(result2); // 👉️ p e a r

// ------------------------------------------------------------------

// // EXAMPLE 2 - Dealing with strings that already contain spaces

// function addSpace(str) {
//   return str.split('').join(' ');
// }

// const str1 = 'app  le';
// const str2 = 'pe ar';

// console.dir(addSpace(str1)); // 👉️ 'a p p     l e'
// console.dir(addSpace(str2)); // 👉️ 'p e   a r'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Removing empty string elements from the array

// function addSpace(str) {
//   return str
//     .split('')
//     .filter(element => element.trim())
//     .join(' ');
// }

// const str1 = 'app  le';
// const str2 = 'pe ar';

// console.log(addSpace(str1)); // 👉️ a p p l e
// console.log(addSpace(str2)); // 👉️ p e a r

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add a specific Number of Spaces to a String in JavaScript

// const str = 'baz';

// // ✅ add spaces to end
// const padEnd = str + ' '.repeat(3);
// console.dir(padEnd); // 👉️ "baz   "

// // ✅ add spaces to start
// const padStart = ' '.repeat(3) + str;
// console.dir(padStart); // 👉️ "   baz"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Add a specific number of spaces to the middle of a string

// const str = 'baz';

// const index = str.indexOf('a');
// const padMiddle =
//   str.slice(0, index) + ' '.repeat(3) + str.slice(index);
// console.dir(padMiddle); // 👉️ 'b   az'

// ------------------------------------------------------------------

// // EXAMPLE 6 - Defining a reusable function

// function addSpacesAtIndex(str, index, numSpaces) {
//   return (
//     str.slice(0, index) +
//     ' '.repeat(numSpaces) +
//     str.slice(index)
//   );
// }

// const str = 'baz';

// console.dir(addSpacesAtIndex(str, 1, 2)); // 👉️ 'b  az'
// console.dir(addSpacesAtIndex(str, 1, 3)); // 👉️ 'b   az'
// console.dir(addSpacesAtIndex(str, 1, 4)); // 👉️ 'b    az'

// ------------------------------------------------------------------

// // EXAMPLE 7 - Add a specific Number of Spaces to a String using `padEnd` and `padStart`

// const str = 'baz';

// const padEnd = str.padEnd(6, ' ');
// console.log(padEnd); // 👉️ "baz   "

// const padStart = str.padStart(6, ' ');
// console.log(padStart); // 👉️ "   baz"

// ------------------------------------------------------------------

// // EXAMPLE 8 - Add a Space between the Characters of a String using `for...of`

// function addSpace(str) {
//   let spaced = '';

//   for (const char of str) {
//     if (char.trim()) {
//       spaced += char + ' ';
//     }
//   }

//   return spaced.trimEnd();
// }

// const str1 = 'app  le';
// const str2 = 'pe ar';

// console.dir(addSpace(str1)); // 👉️ a p p l e
// console.dir(addSpace(str2)); // 👉️ p e a r
