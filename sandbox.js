// const content = document.querySelector('p');

// content.classList.add('success')
// console.log(content.classList);

// const title =document.querySelector('.title');
// const paras = document.querySelectorAll('p');

// paras.forEach(p =>{
//     if(p.textContent.includes('success')){
//         p.classList.add('success')
//     }
//     if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
// })


// title.classList.toggle('amen');
// title.classList.toggle('amen');

// const article = document.querySelector('article');
// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// })

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// chaining

// console.log(title.nextElementSibling.parentElement.children);


// Events and Event Listeners
// ======================================

// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     console.log('i was clicked');
// })

// const ul = document.querySelector('ul');
// ul.remove();

// const button = document.querySelector('button');
// const ul =document.querySelector('ul');

// button.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'something new';
//     ul.append(li);
    // ul.prepend(li);
// })

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click', e=>{
//         console.log('event in  LI')
//         e.stopPropagation();
//         e.target.remove();
//     })
// })

// ul.addEventListener('click', e => {
//     // console.log('event in UL')
//     if(e.target.tagName === 'Li'){
//         e.target.remove();
//     }
// })


// const button = document.querySelector('button');
// const popup =document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close')
// // popup close = document.querySelector('.popup-wrapper')


// button.addEventListener('click', ( () =>{
//     popup.style.display = 'block';
// }))
// close.addEventListener('click', ( () =>{
//     popup.style.display = 'none';
// }))

// popup.addEventListener('click', ( () =>{
//     popup.style.display = 'none';
// }))

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value); 
    const username = form.username.value;

    


if(usernamePattern.test(username)){
    feedback.textContent = `Valid username`;
}else {
    feedback.textContent = `Invalid Username`;
};
})


//feeback
form.username.addEventListener('keyup', e => {

    console.log(e);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success')
    }else{
        form.username.setAttribute('class', 'error')
    }
})
