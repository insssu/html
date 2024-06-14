// 비구조 할당, 구조 분해 ** 매우 중요 !
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "황인수",
        email: "xmrtn210845@naver.com"
    }

    const names = [ "박현주", "이성희", "권오광", "권혁진" ];

    const { username, password, email } = user;     // {} 안의 내용은 변수로 사용하고 있기 때문에 밑에서 변수를 다시 못씀
    console.log(username); 
    console.log(password); 
    console.log(email); 

    const [ a, b ] = names;
    console.log(a);
    console.log(b);

    const { name, ...newUser } = user;
    console.log(newUser);

    console.log(names.slice(1, 4));     // .slice(1,4)는 1번 인덱스에서 4번 인덱스 미만까지 뽑아내겠다
}

main();