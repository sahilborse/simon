var level=1;
var oldList=[];
var element,m;
var newList=[];
$(".start-button").on("click",()=>{
    $("h2").hide();
    $("h1").text(`Level ${level}`) 
    oldList=randomColor()
    console.log("oldlist",oldList)
})
var allbutton= document.querySelectorAll(".small-button")
var colorList=["red","green","blue","yellow"];
console.log(colorList);
console.log(allbutton);
function randomColor(){
    oldList=[];
    var numOfWhite=0;
    recursiveColor(numOfWhite,level,oldList)
    level++
    return oldList
}
function recall(){
    newList=[]
    $("h2").hide();
    $("h1").text(`Level ${level}`) 
    oldList=randomColor()
    console.log("oldlist",oldList)
}










function recursiveColor(numOfWhite,level,oldList){
    if(numOfWhite<level){var randomNumber=Math.round((Math.random()/0.30));
    oldList.push(randomNumber);
    allbutton[randomNumber].style.backgroundColor="white";
    setTimeout(() => {
        console.log("works")
        allbutton[randomNumber].style.backgroundColor=colorList[randomNumber];
        numOfWhite++;
        recursiveColor(numOfWhite,level,oldList)
    }, 900);}
}
// function eventStart(){
//     $("h2").hide();
//     $("h1").text(`Level ${i}`) 
//     oldList=random()
//     console.log(oldList)
// }
$(".red").on("click",function(){
    newList.push(0)
    rangeOut()
})
$(".green").on("click",()=>{
    newList.push(1)
    rangeOut()
})
$(".blue").on("click",()=>{
    newList.push(2)
    rangeOut()
})
$(".yellow").on("click",()=>{
    newList.push(3)
    rangeOut()
})
function rangeOut(){
    if(newList.length==oldList.length){
        console.log("wtf");
        for (let index = 0; index < newList.length; index++) {
           if(newList[index]!=oldList[index]){
            $("h2").show();
            level=1
            $("h1").text("Lost") 
            return 0
            
           }
            
        }
        recall()
    
    }
}
