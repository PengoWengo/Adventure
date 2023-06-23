/* Declare variables below to save the different sections (divs) of your story*/
var buttons2 = document.querySelector(".buttons2")
var optOne2 = document.getElementById("option-one-two")
var optTwo2 = document.getElementById("option-two-two")
var optOne3 = document.getElementById("option-one-three")
var optTwo3 = document.getElementById("option-two-three")
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
var eggGone = document.getElementById("eggGone")


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
}
optTwo3.onclick=function(){
    buttons3.style.display = "none"
    optTwo.style.display = "none"
    end1.style.display = "block"
    eggGone.innerHTML = "You let the animal get away with your egg and you have lost your only egg."
}