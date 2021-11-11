let grade = new Set()

grade.add("A")
grade.add("A")
grade.add("B")
grade.add("C")
grade.add("D")
grade.add("E")

console.log(grade.size);

grade.forEach(function(ele){
    console.log(`Grade list ${ele}`);
})


grade.forEach(ele =>{
    console.log(`Grade using foreach ${ele}`);
})