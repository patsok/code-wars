//----- final kata ----- 

function digital_root(n) {
    let result = 0;
    let string = n.toString();
    for (let i in string) {
        result += Number(string[i]);
    }
    return result > 9 ? digital_root(result) : result;
}

console.log(digital_root(456)); // should equal 6


//----- 1st attempt ----- 

// function digital_root(n) {
//     let result = 0;
//     let string = n.toString();
//     for (let i = 0; i < string.length; i++) {
//         result += Number(string[i]);
//     }
//     return result > 9 ? digital_root(result) : result;
// }