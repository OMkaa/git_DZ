function palindrom(str){
    const len = str.length / 2
    for (let i = 0; i < len; i++) {
       if(str.toLowerCase()[i] !==str[str.length - 1 - i]){
        return false
       }
        return true
    }
}
console.log(palindrom('Аргентина манит негра'));
console.log(palindrom('Анна ии Анна'));







// function palindrome(str) {
//     str = str.toLowerCase().replce(/\s/g,'')
//     return str = str.split('').reverse('').join('')
// }
// console.log(palindrome('Анна'));


