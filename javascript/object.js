const user = {    // {} : 객체
    username: "admin",
    password: "1234",
    name: {
        lastName: "인수",
        firstName: "황"
    },
    print: () => {
        console.log("사용자 이름 : " + user.username);
        console.log(`비밀번호 : ${user.password}`);      // 표현식 `` 변수를 가져다 쓰고싶다면 ${}
        
        // console.log("사용자 이름 : " + this.username);   
        // console.log(`비밀번호 : ${this.password}`);      this 는 class 안에서만 쓸 수 있어서 지금 줄에서는 사용 불가능
    }
};      

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastName);
console.log(user.name.firstName);
user.print()