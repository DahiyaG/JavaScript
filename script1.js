/* Created by Gaurav on 15/6/17.*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Lecture: variables //////////////////////////////////////////////////

/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// Lecture: variables 2 ///////////////////////////////////////////////

/*
var name = 'John';
var age = 26;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = 'false';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried  + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried  + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried  + '.');
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// Lecture: operators ///////////////////////////////////////////////

/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26*2;
//2016-52
//1964

console.log(birthYear);

var ageJohn = '30';
var ageMark = '30';

ageJohn = ageMark = (3+5)*4-6;
//ageJohn = ageMark = 26
//ageJohn = 26;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Lecture: if/else statements /////////////////////////////////////////////

/*
var name = 'John';
var age = '26';
var isMarried = 'yes';

if (isMarried === 'yes'){
    console.log(name + ' is married!');
}
else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if (isMarried){
    console.log('YES!')
}
else {
    console.log('NO!')
}

if (23 == '23'){
    console.log('something to print....')
}
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Lecture: bolean logic and switch ////////////////////////////////////////

/*
var age = 25;

if (age<20){
    console.log('John is a teenager.')
}
else if (age>=20 && age<30){
    console.log('John is a young man.')
}
else {
    console.log('John is a man.')
}

var job = 'teacher';

job = prompt('What does John do?')

switch (job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*/