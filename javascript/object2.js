function createUser(username, password, name, email) {
    return {
        username,       // {} 를 열고 닫지 않으면 객체가 아니므로 key value 를 입력해야 한다.               "username": username
        password,       // 이때, key 값과 value값은 동일하게 사용하지 않으므로 key 값을 문자열로 바꿔준다.   "password": password
        name,
        email
    }
}

function createUser2(username, password, name, email) {
    return {
        "username": username,       
        "password": password,
        "name": name,
        "email": email
    }
}

function createUser3(username, password, name, email) {
    return {
        ["username"]: username,       
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

function main() {
    const username = "admin";
    const password = "1234";
    const name = "황인수";
    const email = "xmrtn210845@naver.com";
    
    let user = createUser(username, password, name, email);
    let user2 = createUser2(username, password, name, email);
    let user3 = createUser3(username, password, name, email);

    console.log(user);
    console.log(user2);
}

main();