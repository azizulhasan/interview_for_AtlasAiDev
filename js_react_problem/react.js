// easy level ans:02

// function evenOrOdd(num){

//     if (num % 2 == 0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// }

// evenOrOdd()

// alternative approach:

// function evenOrOdd(num){
//     return num % 2 == 0 ? "Even" : "Odd";

// }

// evenOrOdd()

Result: 4 out of 5 
Note: you did not pass the paramiter of the function



// medium level 
// palindrome word example: racecar


// let str = "racecar";
// let i = 0

// for(i; str.length; i++){

//     if(str[i] === str.length-1){
//         console.log("Its a palindrome")
//     }
//     else{
//         console.log("Its not a palindrome")
//     }
// }    

Result: 3 out of 10
Note : it's looping unlimited times and saying "Its not a palindrome"

// let i = 0;

// function counter(){
//     for(i; i>10; i++){
//         return 
//     }

// }

// counter()

Note: I don't know why did you commit this.








// hard level: ans no: 14

// import react from react;

// import { useState } from react;

// const [count, setCount] = useState(0)

// c = 0
Note: you're assinging value on a variable before declaring it. It will give error.


// const increaseBtn = document.querySelector('button');
// let c = 0
// function increase(){

//     increaseBtn
Note: what is the functionality of this function?

// }


// increase()

// function Counter(){

//     return <>

//     <h1>
//         Counter App
//     </h1>

//     <div>
//         <button id="increaseBtn">Increase</button>
//         <button id="decreaseBtn"> Decrease</button>
//         <button id="resetBtn">Reset</button>
//     </div>
    
//     </>

// }




// const increaseBtn = document.getElementById('increaseBtn');
// const decreaseBtn = document.getElementById('decreaseBtn');
// const resetBtn = document.getElementById('resetBtn');


// c = 0


// increaseBtn.onclick = ()=>{
//     increaseBtn.addEventListener("click", ()=>{
//         c ++;
//     })
// }


// decreaseBtn.onclick = ()=>{
//     decreaseBtn.addEventListener("click", ()=>{
//         c --;
//     })
// }

// resetBtn.onclick = ()=>{
//     resetBtn.addEventListener("click", ()=>{
//         c = 0;
//     })
// }

result: 3 out of 15

Note: what you've written it's like a javascript function not a react function component
Question and Answer was like this
14.	Build a simple React counter using ``.
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}




