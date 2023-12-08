/*
  ES5시절에는 어떻게 호이스팅 이슈를 피해갔을까?
  해결방법 - 즉시실행함수

  ({})();

  (function(x){
    //실행문
  })(0);
*/

const btns = document.querySelectorAll("ul li");
const btns2 = document.querySelector("ul li");
console.log(typeof btns);//너는 array
console.log(btns.length);//왜냐면 length적용되니까
console.log(btns2.length);//왜냐면 length적용되니까

for(var i=0;i<btns.length;i++){
  ((index) =>{
    btns[index].addEventListener('click', (event) => {
    console.log(index);
    })
})(i);//즉시실행함수 처리한 부분
}//end of for