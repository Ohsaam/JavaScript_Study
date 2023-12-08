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