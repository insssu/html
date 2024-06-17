let names = ["황인수", "황일수", "황이수"];

console.log(names)

names = names.map(name => {return name + "님"})    
//{"황인수님", "황일수님", "황이수님"}
console.log(names);

names1 = names.filter(name => {return name !== "황일수님"});    // filter의 return 안에는 조건식이 들어간다.
names2 = names.filter(name => {return name === "황일수님"});
console.log(names1);        // [ '황인수님', '황이수님' ]
console.log(names2);        // [ '황일수님' ]

names5 = names.map((name, index) => {return name}) 
names6 = names.filter((name, index) => {return index !== 1;}) 

console.log(names5);
console.log(names6);