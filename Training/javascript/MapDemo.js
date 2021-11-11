const resto = new Map();

resto.set('name' , 'Nandini')
resto
.set('Address','Bangalore-98')
.set('categories', ['Indian','Maxican','Chinees'])
.set('open',11)
.set('close',23)
.set(true,'Resto is open')
.set(false,'Resto is closed')


console.log(resto.get('name'));
let time = 12
console.log(resto.get((time >=resto.get('open') && time <= resto.get('close'))));
