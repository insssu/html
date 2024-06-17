const names = [ "김준일", "김준이", "김준삼"];
console.log(names.join(""));

let userList = [];
let epmtyUser = {
    name:"",
    username: "",
    password: ""
};

let user = {        // 초기화용
    ...epmtyUser    // 새로운 주소안에 username과 password의 값을 넣은 것.
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");       // document.() : 문서 전체에서 요소를 가져온다.
    userTableBody.innerHTML = userList.map(({name, username, password}, index) => {   // 호이스팅은 function 정의에서 일어난다.
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                // <td>                   안닫아도 되나 ??
                <td>${username}</td>
                <td>${password}</td>
            </tr>
        `;
    }).join("");        // 배열은 쉼표가(,) 중간에 들어가는데, join()이 기본적으로 들어가져 있어서 그렇다.
                        // join() 안에 join("")을 하면 쉼표(,)가 없어진다. 

}

function handleUserInputKeyDown(e) {
    user = {
        ...user,                 // 입력된 값을 자기 자신에게 계속 쌓는 것. 객체를 계속 새로 만들어주기 때문에 주소가 바뀜.
        [e.target.name]: e.target.value
    }

    // user[e.target.name] = e.target.value;   // 주소는 고정.

    console.log(user);

    if(e.keyCode === 13) {       // 엔터가 들어왔을 때,
        const nameInput = document.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "name") {
            usernameInput.focus();
        }

        if(e.target.name === "username") {
            passwordInput.focus();
        }

        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];        // userList에 새로운 정보 추가. 스프레드를 사용해서 값만 새로운 객체로 변경해 주는것이 좋다.

            renderTable();      // 추가 되었으니 새로운 정보를 꾸려줘야 한다.

            nameInput.value = epmtyUser.name;
            usernameInput.value = epmtyUser.username;   // 빈 값으로 바꿔주고
            passwordInput.value = epmtyUser.password;

            nameInput.focus();      // name으로 다시 포커스를 보내줘서 새로운 값을 받을 수 있도록.
        }
    }
    console.log(e.target.name);
}