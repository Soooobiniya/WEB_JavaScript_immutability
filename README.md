# JavaScript immutability (데이터 불변)
## 2023.04.18 ~ 2023.04.18
***
첫번째 실습
* immutability: 데이터의 원본이 훼손되는 것을 막는 것
* CRUD: Create/Read/Update/Delete => 원본(Create+Read)
1. 무엇을 불변? 값의 이름(name), 값(value)
2. 변수를 선언할 때는 var v = 1; 이런 식으로 선언
3. const는 불변해야 하는 변수를 위해 사용됨 -> ex) const c = 1;
=> 즉, var은 가리키는 값 변경 가능 & const는 가리키는 값 변경 불가능
***
두번째 실습
1. primitive(원시) 데이터 타입은 같은 값이면 변수가 같은 것을 가리킴
2. object(객체)는 같은 값이더라도 변수명이 다르면 각자 다른 것을 가리킴 (why? 객체는 '가변성'을 가짐)
3. primitive(원시) 데이터 타입은 필요할 때까지 새로운 value를 만들지 않음 -> 즉, 값이 달라지면 다른 것을 가리키게 됨
4. object(객체)는 생성할 때마다 새로운 객체를 만듦
***
세번째 실습
1. Object.assign({}, o2)을 사용하면 {}와 o2를 병합해서 하나의 객체로 return -> 서로 값은 같지만, 다른 객체를 가리키게 됨
=> 원본 데이터에 대한 불변함을 유지 & 복제본을 변경함으로써 가변성을 달성
***
네번째 실습
* Nested object: 중첩된 객체 즉, 객체 안에 객체
1. Object.assign을 통해 복제를 하게 되면 해당 객체의 property들만 복제 -> property 중에 value가 object(예를 들면, 배열 등..)일 경우엔 그 property의 value를 복제하는 것이 아니라 '위치'를 복제함
=> 즉, 복제된 객체의 Nested object를 수정하면 원본에 영향을 주게 됨
2. concat을 사용하면 원본을 복제함 => 따라서 객체의 값이 배열일 경우 concat을 사용 (다른 방법도 있음..)
=> ex) o1.score가 [1, 2]와 같이 배열일 경우, var o2 = Object.assign({}, o1)을 해주고 -> o2.score = o2.score.concat()을 함으로써 다른 배열 데이터를 가리킬 수 있게 함
***
다섯번째 실습
1. 객체의 원본 데이터를 불변하게 하기 위해 원본 복제 -> 복제본에 함수 사용 or 함수에서 복제 -> 복제한 객체의 값 변경 -> 복제한 객체를 return
***
여섯번째 실습
1. 배열의 원본 데이터를 불변하게 하기 위해 concat으로 원본 복제해야 함
***
일곱번째 실습
* Object.freeze(): 원천적으로 원본 데이터 변경을 막는 것 즉, 누구도 객체를 수정할 수 없도록 하는 것
1. freeze()를 사용하면 객체의 'property'들이 immutable해짐 & 없던 property 추가도 안됨
2. freeze를 푸는 기본 명령도 없음 -> 풀고 싶다면, 복제를 통해 기존 것을 대체하는 등의 방법 사용
3. 그런데 객체의 property가 Nested object(ex: 배열 등)일 경우엔 규제 불가능 -> Nested object는 다른 곳에 저장돼있고, property에는 그 reference만 저장돼있기 때문!
=> 따라서 배열 등의 객체 property의 값을 추가/삭제 등이 가능해짐
=> 이런 경우, immutable하게 하려면 해당 property를 freeze해주면 됨 ex) Object.freeze(o1.score);
***
여덟번째 실습
* const와 Object.freeze의 차이점: const는 이름이 가리키는 값을 다른 것으로 못 바꾸게 하는 것 (따라서 에러 발생함), Object.freeze는 값 자체를 못 바꾸게 하는 것!
* 즉, const는 이름을 규제, Object.freeze는 값을 규제
