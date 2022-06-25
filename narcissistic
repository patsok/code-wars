//----- final kata ----- 

function narcissistic2(value) {
    return value.toString().split("").map(num => {
        return num = num ** ('' + value).length;
    }).reduce((total, num) => total + num) == value ? true : false;
};

console.log(narcissistic2(371)); // should equal true

//----- 1st attempt ----- 

// function narcissistic(value) {
//     let arr = value.toString();
//     let sum = 0;
//     for (let i in arr) {
//         let num = arr[i] ** (arr.length);
//         sum += num;
//     }
//     return sum == value ? true : false;
// }