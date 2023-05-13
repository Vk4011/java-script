let btnRed = document.querySelector('#btn-red');
let btnGreen = document.querySelector('#btn-green');
let btnBlue = document.querySelector('#btn-blue');
let dropdown = document.querySelector('select');


btnRed.addEventListener('click', () => {
    document.body.style.background = 'rgb(231, 84, 84)';
})

btnGreen.addEventListener('click', () => {
    document.body.style.background = ' rgb(100, 247, 100)';
})

btnBlue.addEventListener('click', () => {
    document.body.style.background = 'rgb(45, 168, 234)';
})

dropdown.addEventListener('change', function () {
    const color = this.value;

    switch (color) {
        case 'red':
            document.body.style.background = 'red';
            break;
        case 'green':
            document.body.style.background = 'green';
            break;
        case 'blue':
            document.body.style.background = 'blue';
            break;
        default:
            document.body.style.background = 'white';
    } 

    if(color === 'default'){
        document.body.style.background = 'white';
    }else {
        document.body.style.background = color;
    }
})