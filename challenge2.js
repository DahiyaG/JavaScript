/**
 * Created by gaurav on 25/6/17.
 */

//////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born.
2. Create an empty array (just []).
3. Use a loop to fill the array with the ages of the persons.
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age.
5. Finally, create a function called printFullAge which receives the vector of years as an argument, executes the
   steps 2., 3. and 4. and returns a vector of true/false boolean values: true if the person is of full age
   (>=18 years) and false if not (< 18 years).
6. Call the function with two different vectors and store the results in two variables: full_1 and full_2.
*/

function printFullAge(years) {
    var age = [];
    var fullAges = [];

    for (var i=0 ; i<years.length ; i++){
        age[i] = 2017 - years[i];
    }

    for (var i=0 ; i<years.length ; i++){
        if (age[i]>=18){
            console.log('Full Age - ' + age[i]);
            fullAges.push(true);
        }
        else {
            console.log('NOT Full Age - ' + age[i]);
            fullAges.push(false);
        }
    }

    return fullAges;
}

var years = [1990, 1969, 2000, 2005];
var full_1 = printFullAge(years);
var full_2 = printFullAge([1980, 1995, 2009]);