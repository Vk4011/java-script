// Object destructuring in js

const human = {
    Name: "Vikram",
    branch: "Cse",
    age: 21,
    skill:'web.dev',
    content: "object destructuring"
    
};
console.log(human.age);
console.log(human.skill)

let  {Name,branch,age,skill,content}=human
console.log(skill)
console.log(content)

