var o1 = {name:'kim', score:[1,2]};
Object.freeze(o1);
o1.name = 'lee'; // 객체의 property 값 변경 불가
o1.city = 'seoul'; // 없던 property 추가 불가
console.log(o1);

// Object.freeze(o1.score); // 이 코드를 추가하면 에러 발생 => 아래 코드를 사용해서 객체 property 변경할 수 없기 때문
o1.score.push(3); // 객체의 property가 Nested object(ex: 배열 등)일 경우엔 규제 불가능
console.log(o1);
