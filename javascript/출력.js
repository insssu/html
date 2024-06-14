var fyf;
fyf = 10;
fyf = "10";

var num = 10;
var sNum = "10";

console.log(num === sNum);
var num2;
console.log(!num2);

/*

    !(not) 연산자를 활용하여, 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> false

    var str = "test";
    !!str -> true
    str ="";
    !!str -> false

    var array = [1, 2, 3];
    !!array -> true 
    array = [];
    !!array -> true   배열은 비어있어도 true
    !!array.length -> false   배열의 길이는 비어있으면 false
    array.length > 0 -> true
    array.length === 0 -> false

*/

var num = 0;
console.log(!!num);
var str = "";                   // ' ' 스페이스바 하나가 들어가도 false. 어떠한 값이 들어가줘야 true
console.log(!!str);
var array = [];
console.log(!!array);           // 빈 배열은 true가 나온다.
console.log(!!array.length);    // 하지만 길이는 false
var a;
console.log(!!a);
var b = null;
console.log(!!b);
var c = 0 / 0;  // 0에 0을 나누는 행위는 연산 자체의 오류. 이것을 NaN으로 표현한다. 계산할 수 없다는 뜻.
console.log(c);         // NaN
console.log(!!c);       // false

if(num === 0) {
    console.log("num은 0입니다.");
}

if(!num) {
    var num2 = 20;                  // if를 기준으로  위쪽에서 선언해 준 변수들은 전역변수.  num2는 지역변수
    console.log("num은 0입니다.");
    if(!num2) {                     // 이 줄의 if를 기준으로 봤을 때 num2는 전역변수.
        console.log("num2는 값이 있습니다.")
    }
}

if(!str) {
    console.log("빈 문자열 입니다.");
}

if(!b) {
    console.log("Null 입니다.");
}