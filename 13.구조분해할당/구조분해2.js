// 배열 -> filter ->  얕은복사 or 깊은복사
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
//-> filter는 다른 여러객체에서도 재사용할 수 있는 prototype
//-> fiter함수는 리턴타입이 배열이다. 그런데 깊은복사이다 -  새로운 배열이다.-결론 - 두 배열이 주소번지가 다르다
const result = words.filter((word) => word.length > 6);
console.log(typeof result);
console.log(result.length);
words.push('abcdefg');
console.log(words);
console.log(result);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
//배열에 대한 초기화를 한줄로 끝냄 - 구조분해 할당 -> react -> props
const [r1, r2, r3] = result;
console.log(r1);
console.log(r2);
console.log(r3);
