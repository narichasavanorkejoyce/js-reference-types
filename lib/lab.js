'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.
const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

function regex (str) {
    return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
}

reformatted = regex(paragraph)

const getNormalizedWords = function (paragraph) {
  let words = paragraph.split(" ")
  let normalizedWords = []
  for (let i = 0; i < words.length; i++)
      {
        normalizedWords[i] = words[i].toUpperCase()
      }
  return normalizedWords
};

reformattedWords = getNormalizedWords(reformatted)

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (reformattedWords) {
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < reformattedWords.length; i++) {
        if (uniqueWordsAsKeys[reformattedWords[i]] !== undefined) {
          uniqueWordsAsKeys[reformattedWords[i]]++
        }
        else {
          uniqueWordsAsKeys[reformattedWords[i]] = 1;
        }
      }
  let uniqueWords = [];
  for (let key in uniqueWordsAsKeys) {
        if (uniqueWordsAsKeys[key] === 1) {
          uniqueWords.push(key)
        }
      }
  return uniqueWords;
};

getUniqueWords(reformattedWords);

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
const wordCount = function () {};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
