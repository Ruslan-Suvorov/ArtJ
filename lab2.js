function checkPalindrom (string) {
    const letters = string.split('');
    const reverseLetters = [];
    for (i = letters.length - 1; i >= 0; i--) {
        reverseLetters.push(letters[i])
    }
    return reverseLetters.join('') === string
}
