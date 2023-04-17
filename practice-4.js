/* 원본의 값이 변경되게 하는 코드 */
// function fn(person){
//     person.name = 'lee';
// }

// var o1 = {name:'kim'};
// fn(o1);
// console.log(o1);

/* 원본은 immutable하게 하기 위해 사용할 수 있는 코드 1 */
// function fn(person){
//     person = Object.assign({}, person); // 원본을 복제해서 저장
//     person.name = 'lee';
//     return person; // 복제본을 리턴
// }

// var o1 = {name:'kim'};
// var o2 = fn(o1);
// console.log(o1, o2);

/* 원본은 immutable하게 하기 위해 사용할 수 있는 코드 1 */
function fn(person){
    person.name = 'lee';
}

var o1 = {name:'kim'};
var o2 = Object.assign({}, o1)
fn(o2);
console.log(o1, o2);