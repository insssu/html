function add(x, y) {
    return x + y;
}

const result = add(10, 20);
console.log(result);

function add(x, y, z) {     // 자바 스크립트는 오버로딩(매개변수의 형태가 다르면 같은 함수명을 쓰더라도 매개변수 명을 달리 줬을 때 해당 변수가 실행되도록 하는 것)이 없다. 
    console.log(x);
    console.log(y);
    console.log(z);
}

add(10, 20, 30);