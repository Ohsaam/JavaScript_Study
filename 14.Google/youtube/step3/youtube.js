const keyword = document.querySelector('#keyword');//이벤트 소스의 주소번지 얻기

keyword.addEventListener('keydown', (event)=> {
  console.log(event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출됨 - 자동완성 기능을 흉내내보기

})

//사용자가 입력한 검색어 읽어오기
 const handleSearch = () => {
  const user = document.querySelector('#keyword').value;//사용자가 입력한 글자 얻어왹
  console.log('사용자가 입력한 검색어 ====> '+user);
  //사용자가 입력한 검색어로 조건 검색 구현하기

 }

const search = (query) => {
  console.log(`사용자가 입력한 nba를 받아오기 : `+query);
  // insert here - 검색 결과를 가져오는 코드 작성하기
}

const ajax = new XMLHttpRequest();
const Youtube_URL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyCcvgxRhPCt-yVa-BcpGUi1dmM4hKYiEi4&maxResults=12&chart=mostPopular';
ajax.open('GET',Youtube_URL,false);
ajax.send();//send()호출될 때 비로서 서버측에 요청이 일어남 0번에서 출발함 -1) -2) -3) -> 4(도착)

//배열을 사용하여 템플릿을 구성해 본다 1-2
const videoList = [];

console.log(ajax.response);//Object
const most = JSON.parse(ajax.response);
const items = most.items;

videoList.push( `<ul class="videos">`);
  for (let i = 0; i < items.length; i++) {
    //25번 반복 - 25개의 li
    videoList.push( `<li class="container">`);
    videoList.push( `<div class="video">`);
    videoList.push( `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`); 
    videoList.push( `<div>`);
    videoList.push( `<p class="title">${items[i].snippet.title}</p>`);
    videoList.push( `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`);
    videoList.push( `</div>`);
    videoList.push( `</div>`);
    videoList.push( `</li>`);
  }
videoList.push( `</ul>`);

document.querySelector('#root').innerHTML = videoList.join('');