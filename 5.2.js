function isvowel(char) {
    return 'aeiou'.includes(char);
}
function countvowel(str) {
    const vowelMap = new Map();
    str = str.tolowercase();
    for (let i = 0; i <= str.length - 1; i++) {
        let character = str.charAt(i);
        if (isvowel(character)) {
            if (vowelMap.has(character)) vowelMap.set(character, vowelMap.get(character) + 1);
            else vowelMap.set(x, 1);
        }
    }
    return vowelMap;
}
console.log(countvowel("Divyabharathi Mayavan"));