//----- final kata ----- 

function order(words) {
    return words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // should equal "Fo1r the2 g3ood 4of th5e pe6ople"

//----- 1st attempt ----- 

// function order(words) {
//     if (!words) return '';
//     let arr = words.split(" ")
//     let sorted = Array(arr.length);
//     let result = '';
//     for (let i in arr) {
//         sorted[(arr[i].match(/\d/g))[0] - 1] = arr[i];
//     }
//     for (let i = 0; i < sorted.length; i++) {
//         i < sorted.length - 1 ? result += `${sorted[i]} ` : result += `${sorted[i]}`;
//     }
//     return result;
// }