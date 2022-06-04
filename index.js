// let myFullName= "joe who";
// console.log(myFullName.length);
// function myName(name){
// for(let i =0; i<name.length; i++){
//     console.log(name);
// }
// }
// myName(myFullName);
// function remSpace(){

// }
// console.log(myFullName.shift())
// let arr = [1, 2, 3]

// console.log(arr.pop())
// let arrName = myFullName.split(" ").shift();
// console.log(arrName);
// function evenOrOdd(n){
//    if(n % 2 ===0){
//        return "Even"
//    }else{
//        return "Odd"
//    }
// }
// console.log(evenOrOdd(6));


// 0 1 1 2 3 5 8 13 21 34 
// let fNum =7;
// for(let i =0; i < fNum; i++){
//     let prevP = i;
//     let prev = prevP +1;
//     let current =prevP + prev;
//     let next =current +prev;
//    console.log(current);
//    console.log('________________________')
//    console.log(next);

// }

// function generateF(fNum){
    
// }


// let newArr = [1, 2, 3,4 ]

// console.log(newArr.reduce((i,j) => i*j))


// console.log(newArr.map(i => i**3))

// let ne =newArr.forEach(i =>{ return i + 3})
// console.log(ne)


let container =document.createElement("div");
container.className = "cont";
container.style.cssText = `width:300px;
height:300px;
background-color:yellow;
display:flex;`;
let rainBow =['orange', 'red','green', 'blue'];
for(let i =0; i<rainBow.length; i++){
    let div =document.createElement("div");
    div.style.width ="50px";
    div.style.height ="50px";
    div.style.backgroundColor =rainBow[i];
    container.append(div);
}

document.body.append(container);