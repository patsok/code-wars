//----- final kata ----- 

var countBits = function(n) {
    return parseInt(n.toString(2).split('').reduce((total, num) => { return parseInt(total) + parseInt(num) }));
}

console.log(countBits(7)); // should equal 3