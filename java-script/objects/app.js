let money = 100;
let section = 7;
let title = 'Objects';


const course = {
    money: 10,
    section: 7,
    title: 'javascript',
    notes: {
        introduction: "welcome to js course"

    },
    enroll() {
        console.log('you are sucess fully enrolled ');
    }

}
course.enroll()


console.log(course.title)

console.log(course)
course.price = 999



function data(){
    return{
        title: title,
        enrol(){
            console.log('you are sucessfully enrolled');
        }
    }
}
// const c=data()
const c=data('javaScript')
c.enrol()
console.log(c)
