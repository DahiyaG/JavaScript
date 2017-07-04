/**
 * Created by gaurav on 22/6/17.
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Lecture : Functions //////////////////////////////////////////////

/*
function calculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);

function yearsUntilRetirement(name,year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement>=0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(name + ' has already retired.');
    }

}

yearsUntilRetirement('John',1990);
yearsUntilRetirement('Mike',1969);
yearsUntilRetirement('Mary',1948);
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Lecture : Statements and expressions ////////////////////////////////////

/*
function someFun(par) {
    //code
}

var someFun = function (par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//Statements
if (x===3){
    //do something
}
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Lecture : Arrays ///////////////////////////////////////////////////

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if (john.indexOf('designer') === -1){
    console.log('John is NOT a designer.');
}
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////// Lecture : Objects //////////////////////////////////////////////////

/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Lecture : Objects and methods ///////////////////////////////////////////

//v1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){
        return 2017 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

//v2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function () {
        this.age = 2017 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);

var mike = {
    yearOfBirth: 1950,
    calculateAge: function () {
        this.age = 2017 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Lecture : Loops ///////////////////////////////////////////////////

/*
for (var i=0 ; i<10 ; i++){
    console.log(i);
}
*/

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

/*
//for loops
for (var i=0 ; i<names.length ; i++){
    console.log(names[i]);
}

for (var i=names.length-1 ; i>=0 ; i--){
    console.log(names[i]);
}
*/

//while loops
/*
var i = 0;
while (i<names.length){
    console.log(names[i]);
    i++;
}
*/

/*
for (var i=1 ; i<=5 ; i++){

    if (i ===3) {
        continue;
    }

    console.log(i);
}
*/