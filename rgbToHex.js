//----- final kata ----- 

function rgb(r, g, b) {
    return [r, g, b].map(value => {
        return `0${Math.max(0, Math.min(255, value)).toString(16).toUpperCase()}`.slice(-2);
    }).join("");
}

console.log(rgb(173, 255, 47)); // should equal 'ADFF2F'

//----- 1st attempt ----- 

// function rgb(r, g, b) {
//     let arr = [r, g, b];
//     let result = '';
//     arr.map(value => {
//         value > 255 ? value = 255 : value < 0 ? value = 0 : value;
//         let hex = value.toString(16).toUpperCase();
//         result += hex.length == 1 ? `0${hex}` : hex;
//     })
//     return result
// }

//----- 2nd attempt ----- 

// function rgb(r, g, b) {
//     return [r, g, b].map(value => {
//         value > 255 ? value = 255 : value < 0 ? value = 0 : value;
//         return `0${value.toString(16).toUpperCase()}`.slice(-2);
//     }).join("");
// }