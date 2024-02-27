// document.addEventListener('click',function(){
//     console.log('click on document');
// })

// let btn = document.querySelector('.hello');

// function change(){
//     btn.style.backgroundColor = 'red';
// }
// btn.addEventListener('click',change)
// btn.removeEventListener('click',change);

//event object

// let btn1 = document.querySelector('.obj');
// btn1.addEventListener('click', (e) => {
//     console.log(e);
// });

let myDiv = document.createElement('div');
// let list = {
//     hero:2,
//     dhoom:3,
//     robot:4
// };

for (let i=0; i<100; i++){

    let newElement = document.createElement('p');
    newElement.textContent = i; 
    newElement.addEventListener('click',(e)=>
    {
        console.log('click');
    });
    myDiv.appendChild(newElement);
    

}
document.body.appendChild(myDiv);