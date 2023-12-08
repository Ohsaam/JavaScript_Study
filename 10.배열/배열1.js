/*
  Array - 내장함수, -> 얕은복사, 깊은복사 -> forEach문
  :연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조 -> Map
*/
const colors = ["red", "blue", "green"]
console.log(colors);
colors.forEach((color) => {//JSON포맷 다루기
  console.log(color);
})
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[0]);

colors.map((color) => console.log(color))

const arr1 =  ["a", "b","c"];
let cnt = 0;
arr1.forEach(function(a, index){
  console.log(`element ===>  ${element}`);
  cnt++
})

console.log(cnt);
//Front-End : Back-End도움없이(지원없이) 단독으로 테스트해 볼 수  있다. 
/*
https://developer.mozilla.org/ko/docs/Glossary/Shallow_copy
객체의 얕은 복사는 복사본의 속성이 복사본이 만들어진 원본 객체와 같은 참조 
(메모리 내의 같은 값을 가리킴)를 공유하는 복사입니다. 
따라서 원본이나 복사본을 변경하면, 다른 객체 또한 변경될 수 있습니다. 
이러한 동작은 원본과 복사본이 완전히 독립적인 깊은 복사의 동작과 대조적입니다.
JSON의 경우 언어에 제약이 없다.
JSON -> Array
JSON.parse();
JSON.stringify();JSON-> string [object, Object] -> 실제 값이 출력됨
*/
const names = ["나신입","강감찬","이성계"];
const copy = []


for(let i = 0;i<names.length;i++){
  copy.push(names[i]);
  console.log(`copy[${i}] : ${copy[i]}`);
}
copy.push("나초보");
//깊은 복사란 새로운 배열을 추가하는 것이고
//얕은 복사란 주소번지가 같은 거니까 한쪽을 바꾸면 다른쪽도 바뀐다 - 오염 -   
//불변성지키면서 코딩하는 개발자 -  참조형인 경우에 대해서만 적용됨
cosole.log(copy);
console.log(names);
