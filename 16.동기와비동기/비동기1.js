// 아래는 동기코드 인가? 아님 비동기 코드인가?
// 자바스크립트는 순서대로 처리가 된다(defer강조- 보류- 지연)
//흐름을 바꾼다(진지) - 논리적인 오류 - 트러블슈팅
//DOM Tree(브라우저) - DOM API를 통해서 접근이 가능하다
const hap = (a, b) => {
  setTimeout(()=>{
    //return, 실행문-제어문
    return a+b;
  },3000)//1초간의 지연이 발생함
}

const x = hap(1,2);
const y = x;
console.log(x);
console.log(y);

/*
  setTimeout(콜백함수, 지연되는 시간-milli)

  비동기적인 상황을 마주하기 전에 대비를 해본다
  html + 서블릿
  html + jsp
  네트워크 - 도메인다름, 포트 -네트웤지연발생, 여보세요(IO)지연  - waiting - 콜백함수 
  html + 지연발동 + 스프링(Tomcat - 172.16.2.3:8000) + 오라클(211.150.35.7:1521)
  html  + javascript(Promise, async:비동기상황알림, await 함수호출-콜백) + 스프링

 오라클 서버제품

왜 하필이면 너가?
html - 클라이언트 다운로드 - 단방향, 제어문이 없다
css  - 상동 - 예쁜애
js - 상동 - 로컬 처리되는 언어 - 로컬(브라우저)명심 - 자바스크립트 너가 해줘야 겠어(firebase.js or authLogic.js)

자스 - 1995년
jquery - 2006년-최초 문서화작업 -api
jqueryUI - 2010년 - 화면단 -  국토개발부
NodeJS - 2009년 -V8
ES6 - 2015년 - 모듈화, 모더니즘, jquery가 아니어도 되지 않을까? html5등장
2022년 순위에서 빠져나감


<div id = 'root'>값</div> - 오라클(cursor-로우+컬럼-> 테이블) - 자바(List<Map>, List<VO>) - JSON - Array

document.querySelector('#root').innerHTML = `${변수이름}`

자바, 서블릿, jsp, 스프링, 오라클, ,mysql(백엔드)

 action에 오는 페이지는 사용자가 입력한 값을 전송하고 처리를 받아서 돌려줄 요청 URL
 자바는 이 요청을 받을 수 없다 -왜냐면 http프로토콜을 지원하는 api가 없으니까....
 그럼 누가 있죠?  서블릿(태그를 문자열출력하니까- 후니다)-> jsp -> spring
 Restful API지원하는 함수로 전송방식 결정됨 - 서버측  청취한 후에  오라클(data+2) 콜라보 결과 만들어냄
< form  method=get action='http://172.16.2.3:8000/dept/deptList.jsp(do or gd)>
</form>

 */