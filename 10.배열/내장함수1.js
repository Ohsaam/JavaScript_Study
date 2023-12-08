/*
  내장함수 -1
  : UI만 가지고도 단위테스트를 할수 있다.

  splice & slice -> 얕은복사 인가 아님 깊은복사

*/
const names = ["나신입","강감찬","이성계"];

const result = names.toString();
console.log(result);
// join - DOM API (가독성 안좋아)  -> 문자열 템플릿 -> 최소한 DOM Tree 보인다
const result2 = names.join("+");
console.log(result2);

names.splice(1, 0, '나초보');
console.log(names);

const other = names.slice(1)
console.log(names);
console.log(other);
other.push('강호동');
console.log(other);
console.log(names);