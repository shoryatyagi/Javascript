//adding hundred para

const t1 = performance.now();
for(let i =1 ;i<=100;i++){
    let newElement = document.createElement("p");
    newElement.textContent = 'This is para '+i;

    document.body.appendChild(newElement);
}
//optimising a bit
const t2 = performance.now();
console.log(t2-t1);

// const t3 = performance.now();
// let myDiv = document.createElement("div");
// for (let i= 1;i<=100;i++){
//     let newElement = document.createElement("p");
//     newElement.textContent = 'This is para '+i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log(t4-t3);/

const t5 = performance.now();
let fragment =  document.createDocumentFragment();
for(let i =1 ;i<=1000;i++){
    let newElement = document.createElement("p");
    newElement.textContent = 'This is para '+i;

    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);