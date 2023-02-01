
let name=document.getElementById('name')
let email=document.getElementById('email')
let username=document.getElementById('user_name')
let image1=document.getElementById('pic1')
let image2=document.getElementById('pic2')
let image3=document.getElementById('pic3')
let image4=document.getElementById('pic4')
let form=document.getElementById('user_Form')
let userDetail_name=document.getElementById('udname')
let userDetail_username=document.getElementById('uduname')
let diceImage=document.getElementById('dice_image')
let number=document.getElementById('rNumber')
let outputAfterCount=document.getElementById('badLuck')
let finalOutput=document.getElementById('rtext')
let sum=document.getElementById('sum')
let congratulationImage=document.getElementById('congratulationImage')

function show(){
     form.style.display="block";
     diceImage.style.display="none";
     congratulationImage.style.display="none"
    //  show().disabled=false;
}
function register(){
    let name=name.value;
    let email=email.value;
    let username=username.value;
    if((name!=="") && (email!=="") && (username!=="")){
    image1.onclick = null;
    image2.onclick = showOutput();
    image3.onclick = null;
    image4.onclick = null;
    }
}


function showOutput(){
    form.style.display="none";
    congratulationImage.style.display="none"
    // diceImage.style.display="none";
    userDetail_name.innerText="Name : "+name.value;
    userDetail_username.innerText="Username : "+username.value;
}

// Make 2 functions

function function2(){
    diceImage.style.display="block";
    userDetail_name.style.display="none";
    userDetail_username.style.display="none";
    congratulationImage.style.display="none"
    finalOutput.style.display="none";
  
    }
   
    let diceSum=0;
    let countDiceClick=0;
    let countDiceAttempt=0;
    let clickImage4 = 0;
    let  arr= [1, 2, 3, 4, 5, 6];
    function clickDice(){
        if(countDiceClick <3 && countDiceAttempt<2){
            let randomIndex = Math.floor(Math.random() * 6) // 0 - 5 only integers
            let randomDiceNumber = arr[randomIndex];
            diceSum += randomDiceNumber;
            number.innerText="Dice click Value = "+randomDiceNumber;
          
            countDiceClick++;
        }
        if(countDiceClick === 3 && diceSum <=10 && countDiceAttempt===1){
          
            clickImage4 = 0;
            countDiceAttempt++;
            diceSum=0;
            countDiceClick=0;
            const op="bad luck"
            outputAfterCount.innerText=op;
        }
        else if(countDiceClick === 3 && diceSum <= 10){
            clickImage4 = 0;
            countDiceAttempt++;
            diceSum=0;
            countDiceClick=0;
            alert("please try again");
        }
        else if(countDiceClick === 3 && diceSum > 10){
            clickImage4 = 1;
            countDiceAttempt++;
            // countDiceAttempt=0;
        }
   
    }



    function createRandom(){
        diceImage.style.display="none";
        number.style.display="none";
        sum.style.display="none";
        var random='';
        var characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
        for(var i=0;i<12;i++){
            random+=characters.charAt(Math.floor(Math.random() *characters.length));
        }
        finalOutput.innerText=random;
        
        congratulationImage.style.display="block"
    }

















