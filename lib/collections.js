'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
let words = paragraph.split(" ");

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = []
for (let i = 0; i < words.length; i++)
    {
      normalizedWords[i] = words[i].toUpperCase()
    }

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
for (let i = 0; i < normalizedWords.length; i++) {
      if (uniqueWordsAsKeys[normalizedWords[i]] !== undefined) {
        uniqueWordsAsKeys[normalizedWords[i]]++
      }
      else {
        uniqueWordsAsKeys[normalizedWords[i]] = 1;
      }
    }

// The keys pulled out into a list
let uniqueWords = [];
for (let key in uniqueWordsAsKeys) {
  if (uniqueWordsAsKeys[key] === 1) {
    uniqueWords.push(key)
  }
}


// The words as keys and the values the count of each word
let wordFrequencies = {};

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};
