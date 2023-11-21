var i=1;
var oldList=[];
var newList=[];
$(".start-button").on("click",eventStart())
function eventStart(){
    console.log("new begin")
    
    // $("h2").hide();
    // $("h1").text(`Level ${i}`) 
    oldList=random()
    console.log(oldList)
}
var allbutton= document.querySelectorAll(".small-button")
var colorList=["red","green","blue","yellow"];
function random(){
    var oldList=[];
    var m=0;
    recursive(m,i,oldList)
    console.log(oldList)
    i++
    return oldList
}
function recursive(m,i,oldList){
    if(m<i){var randomNumber=Math.round((Math.random()/0.30));
    oldList.push(randomNumber);
    allbutton[randomNumber].style.backgroundColor="white";
    setTimeout(() => {
        console.log("works")
        allbutton[randomNumber].style.backgroundColor=colorList[randomNumber];
        m++;
        recursive(m,i,oldList)
    }, 1000);}
  
}
// after whole program runs
function rangeOut(){
    var element,base,count;
    count=0;
   if(newList.length>oldList.length){
        i=1
        eventStart()
   }
   if(newList.length==oldList.length){
        while(element in newList==base in oldList){
            count++;
        }
        if (count==oldList.length){
            i++
            oldList=random()
        }
   }
   
    
    
    
}
function winUser(){
    var element,base;
    console.log("newList");
    console.log(newList)
    if(element in newList==base in oldList){
        $("h1").text(`Level ${i}`)
        oldList=random();
       
    }
}
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
// .css("background-color","white")
//problem arise is can't fetch background color of box