function countLetters(str){
  var letterCounts = {};
  var counts;
  // var noSpacesStr = str.replace(/\s/g, '');
  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    counts = letterCounts[letter];
    letterCounts[letter] = counts ? counts + 1 : 1;
  }
  return letterCounts
}

console.log(countLetters("hello"))


// var test = "aabbccc"
// for (var i = noSpacesStr.length; i < noSpacesStr.length; i++) {
//   var letterCount = noSpacesStr[i];
//   return ()

// }