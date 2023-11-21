// Easy Going

for(i=0; i <= 200; i+=2){
    console.log(i)
}
console.log('Easy Going answered')

//---------------------------------------------------------------------------
// Get Even
//log only even numbers from 0 - 200

for(i=0; i <= 200; i+=2){
    console.log(i)
}
console.log('get even answer')
//-----------------------------------------------------------------------------
//  Fizz Buzz

for (i=0; i<=99; i++){
    console.log(i)
}
console.log(i)

//divisible by 3

for(i=0; i<=99; i+=3){
console.log(i)
}
console.log('fizz')

//divisible by 5

for(i=0; i<=99; i+=5){
    console.log(i)
}
console.log('buzz')

//divisible by 3 and 5 

for(i=0; i<=99; i+=3,i+=5){
    console.log(i)
}
console.log('fizzbuzz answered')

//-------------------------------------------------

//Wild Wild life

const plantee = ['plantee', 'plant','5000','mordor'];
plantee[2] = 5001;
console.log(plantee);

const wolfy = ['wolfy', 'wolf', '16', 'yukon territory'];
wolfy[3] = 'gotham, city';
wolfy[0] = 'gameboy';
console.log(wolfy);

const Dart = ['dart','demongorgan dog', 2, 'upside down'];
Dart.push('hawkins');
console.log(Dart);

console.log('wild life answered');
//-----------------------------------------------------
//Yell at the ninja turtles

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

const uppercased = ninjaTurtles.map(name => name.toUpperCase());
console.log(uppercased);

console.log('Yell at the ninja turtle');
//-----------------------------------------------------
//Methods, and Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
favMovies.push('guardian of the galaxy');
console.log(favMovies);
favMovies.pop();
console.log(favMovies);
favMovies.reverse();
console.log(favMovies);
favMovies.shift();
console.log(favMovies);
favMovies.unshift();
console.log(favMovies);
favMovies.slice(4, 9);
console.log(favMovies);
favMovies.sort((a, z) => {
 return a.localeCompare(z);
 })
console.log(favMovies);
console.log('titanic');
console.log("Methods Revisited answered");
//----------------------------------------------------
const whereIsWaldo = [['Timmy','Frank'], 'Eggbert',
['Lucinda', 'Jack', 'Neff', "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1);
console.log(whereIsWaldo);

whereIsWaldo[5] = 'no one';
console.log(whereIsWaldo);

console.log('Waldo');
console.log('Where is Waldo answered');
//---------------------------------------------------
//Excited Kitten
