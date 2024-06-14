// 객체의 값 수정
function modifyUser(user, target, value) {
    const newUser = {
        ...user,                // 객체안의 값들(key, value)만 들어간다. username: "admin", password: "1234"
        [target]: value         // target안의 값을 쓰고 싶다면 [] 를 이용해서 안의 값만 뽑아올 수 있다.
    };                          // 스프레드(...)를 사용하지 않으면 username: user.username 요소마다 입력을 다시 해줘야 받아올 수 있다.
    return newUser;
}

function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

    // delete user.password;

    user = {
        password,
        ...rest
    }

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [ user, newUser ];                 // 100번 주소
    const newUserList = [ ...userList, newUser2 ];      // 200번 주소, 배열([])을 여는순간 새로운 주소를 만들고 스프레드(...)를 통해 안에 들어있는 요소들만 가져오는 것.

    console.log(userList);      
    console.log(newUserList);   

    // 스프레드(...) -> 깊은 복사 : 안에 있는 값들을 새로운 주소에 복사하는 것.

    const userList2 = userList; // 얕은 복사. 주소가 같음.

    const [ a, b, c ] = newUserList;

    const { username, password } = newUser[0];
}

main();