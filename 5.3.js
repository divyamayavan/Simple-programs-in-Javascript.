const arr = [1, 2, 3, 6, 2, 9, 10, 4];

function hasDuplicates(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
}
console.log(hasDuplicates(arr));