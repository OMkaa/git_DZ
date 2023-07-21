var color = document
color = prompt('вводить цвета')
    switch (color) {
        case 'red':
            alert('стой')
            console.dir(document.body.style.backgroundColor = 'red')
            break
        case 'yellow':
            alert('нужно подождать')
            console.dir(document.body.style.backgroundColor = 'yellow')
            break
        case 'green':
            alert('можешь идти или ползти')
            console.dir(document.body.style.backgroundColor = 'green')
            break
        default:
    }
    
var button = document.querySelector('.click')
button.addEventListener('click', function(){
    button.innerText = prompt ('Dontworybehappy')
    
})