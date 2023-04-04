//Write a function that accepts an array of strings
// and console.logs each element using a for loop.

let arry = ["food", "mat", "dog", "wolve", "cow", "mouse"];
for(let x = 0; x<= arry.length-1; x++){
console.log(x);
console.log(arry[x]); 
}


//Write a function that accepts an array of numbers and 
//uses the forEach() method to console.log each number 
//multiplied by 2.

let num =[5, 7, 4, 8, 3, 9];
const result = num.map(
    (item)=>{
        return item * 2
    }
)
console.log(result);


//Write a function that takes in an array of numbers and
 //consoles the first four items multiplied by 8 and the
 // last two added by 5. Console the array with the new values


 function takeArry(arr) {
    for (let i = 0; i < 4; i++) {
      arr[i] *= 8;
    }
    arr[arr.length - 1] += 5;
    arr[arr.length - 2] += 5;
    console.log(arr);
  }
  
  let myNum = [8, 2, 3, 4, 15, 26];
  takeArry(myNum);


//Write a function that takes in the following array and 
//use a while loop to iterate and break when the item is 
//equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];


function breakNum(num){
    let y = 0;

while(y < num.length){
    num[y];
    if(y===4){
        break;
    }
    console.log(num[y]);
      y++;
}
 }
let arrNum = [1,2,3,4,5,6,7,8,9];
breakNum(arrNum)


 //Write a function that takes in a an array of strings and 
 //use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits= ['apple','plum','banana','strawberries','kiwi']
for(let z = 0; z<fruits.length; z++){
    if(z===2){
        continue;
    }
    console.log({"continue":z})
    }

