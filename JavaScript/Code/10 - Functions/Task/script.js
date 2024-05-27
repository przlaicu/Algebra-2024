let words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// console.log(words);

function findlongestWord(arr) {

    var longestWord = '';
    var currentWord = '';

    for (var i = 0; i < arr.length; i++) {
        currentWord = arr[i];
        if (currentWord.length < arr[i].length) {
            longestWord = arr[i];
        }
        return longestWord;
    }
}

console.log(findlongestWord(words));
