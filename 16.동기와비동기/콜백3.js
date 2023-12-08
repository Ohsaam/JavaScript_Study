// 1 2 3 을 순서대로 출력하는 문장을 작성해 보시오

console.log(1);//첫번째로 1

const second = (cback) => {
  setTimeout(()=> {
    console.log(2);//세번째로 2
    cback()
  },2000)
}// end of second

const first = () => {
  console.log(3);
}

second(first)