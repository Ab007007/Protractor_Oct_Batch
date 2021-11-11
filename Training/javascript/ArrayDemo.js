let numbers = [1,2,3,4,5,6,7,8]
let fruits = ['Apple','Banana','Orange', 'Grapes']


//console.log(numbers);
//console.log(fruits);

console.log(`Length of the array ${fruits.length}`);
fruits.pop();
console.log(fruits);

console.log("Insert Element to the Array");
fruits.push("Cherry")
console.log(fruits);

console.log("Remove the element from te begining of the array");
fruits.shift();
console.log(fruits);

console.log("Insert the element to the begining of the array");
fruits.unshift("New Apple");
console.log(fruits);

delete fruits[1];
console.log(fruits);
fruits[1] = "new Banana"
console.log(fruits);

console.log(fruits.slice(0,2));
console.log("Array after slice" + fruits);
//fruits.splice(0,3);
//console.log(fruits);
console.log(fruits.join(' : '));

fruits.concat(numbers);
console.log(fruits.concat(numbers));