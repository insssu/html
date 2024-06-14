function printUser(uesr) {        // ({})는 매개변수를 비구조 할당으로 받겠다 

    console.log(`사용자 이름: ${uesr.username}`);
    console.log(`비밀번호: ${uesr.password}`);
    console.log(`이름: ${uesr.name}`);
    console.log(`이메일: ${uesr.email}`);
}

function printUser2({ username, password, name, email }) {        // ({})는 매개변수를 비구조 할당으로 받겠다 

    console.log(`사용자 이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);
}
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "황인수",
        email: "xmrtn210845@naver.com"
    }

    printUser(user);
    printUser2(user);
}

main()