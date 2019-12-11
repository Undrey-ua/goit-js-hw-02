function findLongestWord(string) {
  const longestWord = string.split(" ").sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
