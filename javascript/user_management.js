// inputMode = 1 > 추가
// inputMode = 2 > 수정

let inputMode = 1;

// const lsUserList = localStorage.getItem("list")

// let userList = !lsUserList ? [] : JSON.parse(lsUserList);
let userList = [];
loadUserList();

let emptyUser = {
    id: 0,      // user 객체에 id 값을 주겠다.
    name:"",
    username: "",
    password: ""
};

let user = {        // 초기화용
    ...emptyUser    // 새로운 주소안에 username과 password의 값을 넣은 것. 상태.
}

function renderTable() {        // 화면에 뿌려주는 function
    const userTableBody = document.querySelector(".user-table-body");       // document.() : 문서 전체에서 요소를 가져온다.
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => {   // 호이스팅은 function 정의에서 일어난다.
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)" value="${id}"></th>
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
        [e.target.name]: e.target.value     // 기존의 user에 덮어 쓰겠다.
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
            if (inputMode === 1) {
                userList = [ ...userList, { ...user, id: getNewId() } ];        // userList에 새로운 정보 추가. 스프레드를 사용해서 값만 새로운 객체로 변경해 주는것이 좋다.
            }
            
            if (inputMode === 2) {
                let findIndex = -1;
                for (let i = 0; i < userList.length; i++) {
                    if (userList[i].id === user.id) {
                        findIndex = i;
                        break;
                    }
                }
                if (findIndex === -1) {
                    alert("사용자 정보 수정 중 오류 발생. 관리자에게 문의하세요."); // 오류가 잘 나지 않지만 항상 오류처리는 해주자
                    return;
                }
                userList[findIndex] = user;
            }

            
            saveUserList();
            renderTable();      // 추가 되었으니 새로운 정보를 꾸려줘야 한다.
            clearInputValue();
            

            nameInput.focus();      // name으로 다시 포커스를 보내줘서 새로운 값을 받을 수 있도록.
        }
    }
    console.log(e.target.name);
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));         // 로컬 리스트에 value값은 무조건 문자열로 가져와야 한다.
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
    const checkBoxList = document.querySelectorAll("input[type='checkBox']");   // 체크박스를 radio로 쓰면 안되는건가?? => 라디오는 체크를 풀 수 없음.
    for(let checkBox of checkBoxList ) {
        if ( checkBox === e.target ) {
            continue;
        }
        checkBox.checked = false;
    }
    
    if (e.target.checked) {
        inputMode = 2;
        const [ findUser ] = userList.filter(user => user.id === parseInt(e.target.value));
        setInputValue(findUser);    // value의 자료형 : string
        user = {        
            ...emptyUser
        }
        return;
    }

    clearInputValue();
           
}

function setInputValue(user) {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");

    
    // const findUser = userList.filter(user => user.id === id)[0];   이 구조와 같지만 무조건 0번째 인덱스를 가져오기 때문에 비구조 할당으로 써줘도 된다.
    nameInput.value = user.name;
    usernameInput.value = user.username;
    passwordInput.value = user.password;
}

function clearInputValue() {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    nameInput.value = emptyUser.name;
    usernameInput.value = emptyUser.username;   // 빈 값으로 바꿔주고
    passwordInput.value = emptyUser.password;

    inputMode = 1;
    user = {
        ...emptyUser
    }        
}