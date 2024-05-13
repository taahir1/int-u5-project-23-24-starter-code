// Declare your arrays here

let comedies=["comdey11.png","comedy12.png","comedy13.png"];
console.log(comedies);
let actions=["action1.png","action2.png","action3.png"];
console.log(actions);
let documentaries=["docu1.png","docu.webp"]
console.log(documentaries);
let submitButton = document.querySelector("button");
let results=document.querySelector(".results")
// Make sure to declare your HTML elements as variables! 

let x=document.querySelector(".movix");
console.log("first" + x);


submitButton.addEventListener("click",function(){

x = x.value;
console.log("as array" + x);

if(x==="Comedy"){
x=comedies;

}else if(x==="Action"){
    x= actions;
}else if(x==="Documentary"){
x=documentaries;
}
console.log(x);


x.forEach(function(y){
    let pic=document.createElement("img");
    pic.src=y;
    results.appendChild(pic);
});

});
