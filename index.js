

let hidebackground = document.getElementById("gambling");


function checkAge() {
    
    let birthdate = document.getElementById("bithdate").value;
    // console.log(birthdate.value)
   
    let GetYear = new Date(birthdate);

    let currentDate = new Date();

    let age = currentDate.getFullYear() - GetYear.getFullYear();

    let presentage = document.getElementById("Age");

    if (age > 18) {
        presentage.innerHTML = `Your Age is ${age}`;
        alert("You are eligible");
        hidebackground.style.cssText = " visibility:visible"

    } else {
        alert("sorry you can't play this game");
        // blurbackground.style.cssText="filter : blur(20px);"
    }
}





let Inputnum = document.getElementById("number");
console.log(Inputnum)

let spammsg = document.getElementById("errorMessage");


function checkRightVal() {
    if (Inputnum.value < 0 || Inputnum.value > 10) {
        spammsg.innerHTML = "Please Enter a Valid Number";
    } else {
        spammsg.innerHTML = "";
    }
}

function play() {
    let Num = Math.floor(Math.random() * (10 + 1));
    console.log(Num);
    if (Inputnum.value == Num) {
        alert("Congratulation You win 100000 rupee")
        show();
    } else if (Inputnum.value == 0) {
        alert("Please Enter Value in Input Filed");
    }
    else {
        alert("Better Luck Next Time");
    };

}



//confetty

function show(){

    confetti.start();
    setTimeout(()=>{
        confetti.stop();
    },5000);
}