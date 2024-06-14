const names = [ "김준일", "김준이", "김준삼"];
console.log(names.join(""));

let userList = [];
let epmtyUser = {
    username: "",
    password: ""
};

let user = {        // 초기화용
    ...epmtyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
        `;
    }).join("");        // 배열은 쉼표가(,) 중간에 들어가는데, join()이 기본적으로 들어가져 있어서 그렇다.
                        // join() 안에 join("")을 하면 쉼표(,)가 없어진다. 

}

function handleUserInputKeyDown(e) {
    user = {
        ...user,                 // 입력된 값을 자기 자신에게 계속 쌓는 것
        [e.target.name]: e.target.value
    }

    console.log(user);

    if(e.keyCode === 13) {       // 엔터가 들어왔을 때,
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];        // userList에 새로운 정보 추가. 스프레드를 사용해서 값만 새로운 객체로 변경해 주는것이 좋다.

            renderTable();      // 추가 되었으니 새로운 정보를 꾸려줘야 한다.

            usernameInput.value = epmtyUser.username;   // 빈 값으로 바꿔주고
            passwordInput.value = epmtyUser.password;

            usernameInput.focus();      // username으로 다시 포커스를 보내줘서 새로운 값을 받을 수 있도록.
        }
    }
    console.log(e.target.name);
}