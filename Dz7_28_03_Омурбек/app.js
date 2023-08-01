// const toggleButtons = document.querySelectorAll('.toggleButton')
// const answerDivs = document.querySelectorAll('.answer')

// toggleButton.forEach(toggleButton =>{
//     toggleButton.addEventListener('click', () =>{
//         console.log('ddsd');
//         if(answerDiv.style.display === 'none'){
//             answerDiv.style.display = 'block'
//             toggleButton.textContent = 'Скрыть ответ'
//         }else{answerDiv.style.display = 'none'
//             toggleButton.textContent = 'Ответ'
//         }   
//     })
// })
// more.style.display = (more.style.display === 'none') ?  'block' : 'none'


const toggleButton = document.getElementById('toggleButton')
const answerDiv = document.getElementById('answer')

toggleButton.addEventListener('click', ()=>{
    if (answerDiv.style.display === 'none') {
        answerDiv.style.display = 'block'
        toggleButton.textContent = 'Скрыть ответ'
    }else{answerDiv.style.display = 'none'
        toggleButton.textContent = 'Ответы'
    }
})

const toggleButton1 = document.getElementById('toggleButton1')
const answerDiv1 = document.getElementById('answer1')

toggleButton1.addEventListener('click', ()=>{
    if (answerDiv1.style.display === 'none') {
        answerDiv1.style.display = 'block'
        toggleButton1.textContent = 'Скрыть ответ'
    }else{answerDiv1.style.display = 'none'
        toggleButton1.textContent = 'Ответы'
    }
})



// const button = document.querySelectorAll('.toggleButton')
// const div = document.querySelectorAll('.answer')
// button.addEventListener('click',()=>{
//     if (div.style.display === 'none') {
//         div.style.display = 'block'
//         button.textContent = 'Скрыть ответ'
//     }else{div.style.display = 'none'
//         button.textContent = 'Ответ'
//     }
// } )


// document.getElementById('hider').onclick = function() {
//     var el = document.getElementById('config-btn');
//     el.style.display === 'none' ? el.style.display = 'initial' : el.style.display = 'none';
//   }

// function btn() {
//     const dots = document.getElementsByClassName('dots')
//     const more = document.getElementsByClassName('more')
//     const sumbit = document.getElementsByClassName('sumbit')
//     console.log(readMore);
//     if(dots.style.display ==='none'){
//         dots.style.display = 'inline'
//         sumbit.innerHTML = 'Ответь'
//         more.style.display = 'none'
//     }else{
//         dots.style.display = 'none'
//         sumbit.innerHTML = 'Скрыть ответы'
//         more.style.display = 'inline'
//     }
// }