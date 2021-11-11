function add(a,b=0,c=0) {

    console.log(`Sum of two numbers is ${a+b}` );
}

let expSum = function (a,b) {
    return a+b
}

console.log(expSum(55,55));

let arrowSum = (a,b) => {
    return a+b
} 


add(2,3)
add(22,22)
add(45)
add(4,5,6)



console.log(arrowSum(44,44));