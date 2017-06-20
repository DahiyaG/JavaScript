/**
 * Created by gaurav on 20/6/17.
 */

var height1 = 170 , height2 = 180 , age1 = 18 , age2 = 16;
var score1 = height1+age1*5 , score2 = height2+age2*5;
if (score1>score2){
    console.log('The winner is player 1 with ' + score1 + ' points');
}
else if (score2>score1){
    console.log('The winner is player 2 with ' + score2 + ' points');
}
else {
    console.log('It is a draw with both players scoring ' + score1 + ' points');
}