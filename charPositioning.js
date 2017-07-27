function countLetters(str){
  var letterCounts = {};
  // var noSpacesStr = str.replace(/\s/g, '');
  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    // test console.log(letter)
    if (!letterCounts.hasOwnProperty(letter)) {
      letterCounts[letter] = [];
    }
    letterCounts[letter].push(i);
  }

  return letterCounts
}

console.log(countLetters("hello"))
console.log(countLetters("hhannahkim"))
