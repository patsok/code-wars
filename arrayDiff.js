//----- final kata ----- 

function arrayDiff(a, b) {
    return a.filter((value) => {
        return b.includes(value) ? false : true;
    })
}

console.log(arrayDiff([1, 2, 3, 5, 8, 2], [1, 2, 8])); // should equal [3,5]