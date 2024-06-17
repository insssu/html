// inputMode = 1 > 추가
// inputMode = 2 > 수정

let inputMode = 1;

// const lsUserList = localStorage.getItem("list")

// let userList = !lsUserList ? [] : JSON.parse(lsUserList);
let userList = [];
loadUserList();

let epmtyUser = {
    id: 0,      // user 객체에 id 값을 주겠다.
    name:"",
    username: "",
    password: ""
};

let user = {        // 초기화용
    ...epmtyUser    // 새로운 주소안에 username과 password의 값을 넣은 것.
}

function renderTable() {        // 화면에 뿌려주는 function
    const userTableBody = document.querySelector(".user-table-body");       // document.() : 문서 전체에서 요소를 가져온다.
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => {   // 호이스팅은 function 정의에서 일어난다.
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>       
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
            userList = [ ...userList, { ...user, id: getNewId() } ];        // userList에 새로운 정보 추가. 스프레드를 사용해서 값만 새로운 객체로 변경해 주는것이 좋다.

            
            saveUserList();
            renderTable();      // 추가 되었으니 새로운 정보를 꾸려줘야 한다.

            nameInput.value = epmtyUser.name;
            usernameInput.value = epmtyUser.username;   // 빈 값으로 바꿔주고
            passwordInput.value = epmtyUser.password;
            // localStorage.setItem("list", JSON.stringify(userList)) 밑에 function으로 빼준 내용

            nameInput.focus();      // name으로 다시 포커스를 보내줘서 새로운 값을 받을 수 있도록.
        }
    }
    console.log(e.target.name);
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable();
}

function deleteUser(e) {
    // userList = userList.filter((user, index) => index !== parseInt(e.target.value));  // "${index}" 문자열로 들어가 있고, 
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));  
        // index는 number이기 때문에 parseInt를 이용해 문자열을 숫자로 바꿔줘야 한다. 하지만 index를 가지고 변환하는것은 위험하다. 왜??
    saveUserList();         // userlist를 다시 덮어쓰는 것.
    renderTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id);
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds);
    return maxUserId + 1;
}

function handleUserCheck(e) {
    e.target.checked = true;
}