var score = [1, 2, 3];
var a = score;
var b = score;

var score2 = score.concat();
score2.push(4);
console.log(score, score2, a, b);