//----- final kata ----- 

String.prototype.toJadenCase = function() {
    return this.split(" ").map(function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
}

let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); // should equal "How Can Mirrors Be Real If Our Eyes Aren't Real"


//----- 2nd attempt ----- 

// String.prototype.toJadenCase = function() {
//     var result = this;
//     if (this.length !== 0) {
//         result = this.split(" ").map(function(word) {
//             return word.substring(0, 1).toUpperCase() + word.substring(1);
//         }).join(" ");
//     }
//     return result;
// }