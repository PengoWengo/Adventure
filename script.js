/* Declare variables below to save the different sections (divs) of your story*/
var buttons2 = document.querySelector(".buttons2")
var optOne2 = document.getElementById("option-one-two")
var optTwo2 = document.getElementById("option-two-two")
var optOne3 = document.getElementById("option-one-three")
var optTwo3 = document.getElementById("option-two-three")
var optOne4 = document.getElementById("option-one-four")
var optTwo4 = document.getElementById("option-two-four")
var screen2 = document.querySelector(".open-one-screen-two")
var screen3 = document.querySelector(".open-two-end-two")
var begin = document.getElementById('begin');
var optOne = document.querySelector(".open-one-screen")
var optTwo = document.querySelector(".open-two-screen")
var story = document.querySelector('.story-opening');
var btn = document.querySelector(".buttons")
var btn2 = document.getElementById("option-one")
var btn3 = document.getElementById("option-two")
var easterEgg = document.querySelector(".easter")
var easter = document.querySelector(".easterEgg")
var sleepLBL = document.getElementById("sleep")
var end1 = document.querySelector(".open-one-end")
var reset = document.querySelector(".reset")
var optOne22 = document.getElementById("option-one-two-two")
var buttons3 = document.querySelector(".buttons3")
var buttons4 = document.querySelector(".buttons4")
var eggGone = document.getElementById("eggGone")
var win1 = document.querySelector(".open-one-end-two")
var winBTN = document.querySelector(".endBTN1")
var winEgg = document.getElementById("winEgg")
var endEnd = document.querySelector(".endEnd1")

let one = 0;
function click1(){
  one += 1;
  if (one === 3){
    sleepLBL.innerHTML="You can't sleep anymore! Wake Up!!"
    optOne22.style.display= "none"
    
  }
}

reset.onclick=function(){
    location.reload()
}
begin.onclick=function(){
    begin.style.display = 'none';
    story.style.display = 'block';
    btn.style.display = "block"
    easter.style.display = "none"
};
btn2.onclick=function(){
    story.style.display = "none"
    btn.style.display = "none"
    optOne.style.display ="block"
    buttons2.style.display = "block"
    optOne22.style.display= "none"
}
btn3.onclick=function(){
    story.style.display = "none"
    btn.style.display = "none"
    optTwo.style.display ="block"
    buttons3.style.display = "block"

}
easter.onclick=function(){
    easterEgg.style.display = "block"
}

optOne2.onclick=function(){
    sleepLBL.innerHTML="You can't sleep anymore, you are well rested"
    optOne2.style.display = "none"
    optOne22.style.display= "block"
    optOne22.style.justifyContent = "center"
    optOne22.style.marginLeft = "47%"

}
optTwo2.onclick=function(){
    buttons2.style.display = "none"
    optOne.style.display = "none"
    end1.style.display = "block"
}
optOne3.onclick=function(){
    buttons3.style.display = "none"
    optTwo.style.display = "none"
    screen2.style.display = "block"
    buttons4.style.display = "block"
}
optTwo3.onclick=function(){
    buttons3.style.display = "none"
    optTwo.style.display = "none"
    end1.style.display = "block"
    eggGone.innerHTML = "You let the animal get away with your egg and you have lost your only egg."
}
optOne4.onclick=function(){
    buttons4.style.display = "none"
    optOne.style.display = "none"
    win1.style.display = "block"
    screen2.style.display = "none"
    winBTN.style.display = "block"
}
optTwo4.onclick=function(){
    buttons4.style.display = "none"
    optOne.style.display = "none"
    screen2.style.display = "none"
    screen3.style.display = "block"
    winBTN.style.display = "block"
}
winEgg.onclick=function(){
    win1.style.display = "none"
    winBTN.style.display = "none"
    endEnd.style.display = "block"
    screen3.style.display = "none"
}