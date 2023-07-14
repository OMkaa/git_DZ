
var date = prompt('день рождение')
var month = Number( prompt('месяц'))
if((date >= 22 && month === 11 && date <= 31) || (date <= 20 && month === 0 && date <= 31))
    alert('Козерог')

if((date >= 21 && month === 0 && date <= 31) || (date <= 18 && month === 1 && date <= 28 ))
    alert('Водолей')

if((date >= 19 && month === 1 && date <= 28) || (date <= 20 && month === 2 && date <= 31))
    alert('Рыбы');
    
if((date >= 21 && month === 2 && date <= 31) || (date <= 19 && month === 3 && date <= 30))
    alert('Овен');

if((date >= 20 && month === 3 && date <= 30) || (date <= 20 && month === 4 && date <= 31))
    alert('Телец');

if((date >= 21 && month === 4 && date <= 31) || (date <= 21 && month === 5 && date <= 30))
    alert('Близнецы');

if((date >= 22 && month === 5 && date <= 30) || (date <= 22 && month === 6 && date <= 31))
    alert('Рак');
 
if((date >= 23 && month === 6 && date <= 31) || (date <= 22 && month === 7 && date <= 31))
    alert('Лев');

if((date >= 23 && month === 7 && date <= 31) || (date <= 22 && month === 8 && date <= 30))
    alert('Дева');
 
if((date >= 23 && month === 8 && date <= 30) || (date <= 23 && month === 9 && date <= 31))
    alert('Весы');
 
if((date >= 24 && month === 9 && date <= 31) || (date <= 22 && month === 10 && date <= 30))
    alert('Скорпион');
 
if((date >= 23 && month === 10 && date <= 30) || (date <= 21 && month === 11 && date <= 31))
    alert('Стрелец')