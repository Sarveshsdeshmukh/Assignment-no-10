// Jay Shree Ram
const btn1 = document.getElementById("decrement");
const btn2 = document.getElementById("Container");
const btn3 = document.getElementById("increment");
const btn4 = document.getElementById("reset");

// const value = 0;
// Event listener for the Decrement button 

btn1.addEventListener("click",() =>{
    const  value = Number(btn2.innerText); 
        btn2.innerText = value -1 ;
});

// for the Increment Button
btn3.addEventListener("click",()=>{
    const value = Number(btn2.innerText);
        btn2.innerText = value+1;
});

// for the reset button

btn4.addEventListener("click",()=>{
    btn2.innerText = 0;
});