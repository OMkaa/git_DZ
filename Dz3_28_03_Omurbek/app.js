function getDataType(str){
    console.log(str)
    var arr;
    arr = str.split('')
    console.log(arr)
    arr.reverse('')
    console.log(arr)
    var newStr
    newStr = arr.join('')
    console.log(newStr);

    return str
    
}
getDataType('Hello world')



function getDataType(str){
    console.log(str)
    var arr;
    arr = str.split('')
    console.log(arr)
    arr.reverse()
    console.log(arr)
    var newStr
    newStr = arr.join('')
    console.log(newStr);
    return str
}
getDataType('42')