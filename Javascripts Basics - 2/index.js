// let rectangle = {
//     length: 1,
//     breadth: 2,
//     draw: function(){
//         console.log('draw');
//     }
// };

function createRectangle(len,bre){
    return rectangle = {
        length: len,
        breadth: bre,
        draw: function(){
            console.log('draw');
        },
        // draw2() {
        //     console.log('draw2');
        // }
    };
}

// let rectangleObj1 = createRectangle(5,4);

//Constructor function -> pascal notation

function Rectangle(len,bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('draw');
    }
}

// object creation using constructor 

let rectangleObj2 = new Rectangle(2,3);
rectangleObj2.color = 'yellow';

delete rectangleObj2.draw;


// default constructor

let Rectangle1 = new Function('length','breadth',
`this.length = length;
this.breadth = breadth;
this.draw = function(){
    console.log('draw');
}`
);

let rectangleObj3 = new Rectangle1(8,9);
for(let key of Object.entries(rectangleObj3)){
    console.log(key);
}

// Object cloning
// iteration
// assign
// spread

let clone_1 = Object.assign({},rectangleObj3);
let clone_2 = {...rectangleObj3};