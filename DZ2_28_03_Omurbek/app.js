
var names = ['Bishkek','Los-Angeles', 'Chicago', 'New-York', 'Houston','Dallas' , 'Philadelphia', 'Seattle']
for (var i = 0; i < names.length; i++){
    if(names[i][2] === 's'|| names[i][3] === 's'|| names[i][5] === 's' || names[i][0] === 'S'){
        console.log(`names with letter s - ${names[i]}`)
    }else{
        console.log(`other names - ${names[i]}`)
    }
}
var city = 6;
city = 'texttt'
console.log(city);
var city = ['Bishkek','Los-Angeles', 'Chicago', 'New-York', 'Houston','Dallas' , 'Philadelphia', 'Seattle']
console.log(city)
for(var i = 0; i < city.length; i++){
    if(city[i] > '6')
    console.log(city[i]);
}

var color = prompt('вводить цвета')
switch(color){
    case 'red':
        alert('стой')
        break
    case 'yellow':
        alert('нужно подождать')
        break
    case 'green':
        alert('можешь идти или ползти')
        break
    default:
        console.log('Надо вводить цвета');
        console.log('Red  ','  Yellow  ','   Green')
        // alert('надо вводить цвета')
        // alert('red')
        // alert('yellow')
        // alert('green')
}