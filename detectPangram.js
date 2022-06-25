//----- final kata ----- 

function isPangram(string) {
    return "abcdefghijklmnopqrstuvwxyz".split("").filter(letter => {
        return string.toLowerCase().includes(letter)
    }).length == 26 ? true : false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // should equal true
console.log(isPangram("This is not a pangram.")); // should equal false

//----- 1st attempt ----- 

// function isPangram(string) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz"
//     let arr = Array.from(string.toLowerCase().replace(/[^\w]|[^\D]/g, '')).sort().reduce(function(a, b) {
//         if (a.indexOf(b) < 0) a.push(b);
//         return a;
//     }, []);
//     let sorted = '';
//     for (let i in arr) {
//         sorted += arr[i];
//     }
//     return sorted == alphabet ? true : false;
// }