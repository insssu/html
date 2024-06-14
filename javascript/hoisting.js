console.log(a); // 실행순서 2번.

var a;      // 실행순서 1번. 호이스팅 : 선언과 정의가 일어나는 것. 변수 선언만 되는 것이고, 초기화는 일어나지 않음. 선언은 먼저 일어난다.

a = 10;     // 실행순서 3번.

var b = 10;
console.log(b);

var b = 20;         // var 키워드는 재선언, 재할당이 가능하다.
console.log(b);     // 선언과 할당을 다시 한 것. 

let c = 40;
console.log(c);
c = "30";

const d = 50;
console.log(d);
// d = 60;                  // 재정의가 안된다.
// console.log(d);

