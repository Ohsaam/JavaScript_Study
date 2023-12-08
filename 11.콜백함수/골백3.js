console.log(1)

const second = (first)=>{
  setTimeout(()=>{

    console.log(2)
    first()
  },2000)
}

const first = () => {
  console.log(3)
}
second(first)