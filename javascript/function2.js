// java script는 함수를 변수에 집어넣을 수 있다. 잘 써야한다 !
const USERNAME = "admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

const login2 = login;       // 변수에 함수를 넣으면 함수의 주소가 copy된다.

login("admin", "1231");     // 앞서 정의했던 login 함수를 그대로 가져올 수도 있네.
login2("admin", "1234");

const add2 = function add(x, y) {
    return x + y;
} 

console.log(add2(10, 20));      // 함수명 대입도 되지만 함수 자체를 통째로 대입할 수 있다.

// 익명함수
const sub2 = function (x, y) {  // 함수명을 따로 정의하면(const sub2) 기존에 정의했던 함수(sub)는 선언할 필요가 없으므로.
    return x - y
}

console.log(sub2(20, 10));

//화살표 함수 (람다 =>)
const div = function (x, y) {
    return !x || !y ? 0 : x / y;
}
let div2 = (x, y) => {
    return !x || !y ? 0 : x / y;
}

// 화살표 함수 (명령이 한줄인 경우) return을 생략할 수 있다.
div2 = (x, y) => !x || !y ? 0 : x / y; 

console.log(div2(10,2))

// 화살표 함수 (매개변수가 하나면 괄호 생략 가능)
const print = data => console.log(data);

print("출력!");

function main() {           // 함수안에서 함수를 정의하는 경우 java에서는 불가능
    const test = () => {       // 화살표 함수를 통해 상위 하위를 구분하도록 약속
        console.log("테스트 함수")
    }

    test();
}

main();
