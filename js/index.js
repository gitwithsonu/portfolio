var photo = document.querySelector(".photo");
photo.addEventListener("click", ()=>{
    // photo.style.position = "fixed";
    // photo.style.transform ="translate(calc(75vw - 300px),-25vh)	";
    // // photo.style.top ="50px";
    // photo.style.width = "100px";
    // photo.style.height = "100px";
    // photo.style.transitionDuration = "1s";
});
var myName = document.querySelector(".myName");
myName.addEventListener("click", ()=>{
    // photo.style.position = "fixed";
    
    // // photo.style.top ="50px";
    // myName.style.transform ="translate(calc(55vw - 300px),-22vh)";
    // myName.style.transitionDuration = "1s";
});

var topic1 = document.querySelector("#topic1");
var topic2 = document.querySelector("#topic2");
var topic3 = document.querySelector("#topic3");
var topic4 = document.querySelector("#topic4");

var topicInfo1 = document.querySelector("#topicInfo1"); 
var topicInfo2 = document.querySelector("#topicInfo2"); 
var topicInfo3 = document.querySelector("#topicInfo3"); 
var topicInfo4 = document.querySelector("#topicInfo4");

var topic1Active = true;
var topic2Active = false;
var topic3Active = false;
var topic4Active = false;

topic1.addEventListener("click",()=>{
    topic1Active = true;
    topic2Active = false;
    topic3Active = false;
    topic4Active = false;
    topic1.style.backgroundColor = "#5ddcff";
    topic1.style.transform = "scale(1.1)";
    topic2.style.backgroundColor = "#4a5374";
    topic2.style.transform = "scale(1)";
    topic3.style.backgroundColor = "#4a5374";
    topic3.style.transform = "scale(1)";
    topic4.style.backgroundColor = "#4a5374";
    topic4.style.transform = "scale(1)";

    topicInfo1.style.display = "flex";
    topicInfo2.style.display = "none";
    topicInfo3.style.display = "none";
    topicInfo4.style.display = "none";
   

    if(topic1Active == true){
        photo.style.transform ="translate(0px, 0px)	";
        photo.style.width = "150px";
        photo.style.height = "150px";
        photo.style.transitionDuration = "1s";
        myName.style.transform ="translate(0px, 0px)";
        myName.style.transitionDuration = "1s";
    }
});
topic1.addEventListener("mouseover",()=>{
    if(topic1Active == false){
        topic1.style.backgroundColor = "#5da9ff";
        topic1.style.transform = "scale(1.1)";
    }
});
topic1.addEventListener("mouseout",()=>{
    if(topic1Active==false){
        topic1.style.backgroundColor = "#4a5374";
        topic1.style.transform = "scale(1)";
    }
});
topic2.addEventListener("click",()=>{
    topic2Active = true;
    topic1Active = false;
    topic3Active = false;
    topic4Active = false;
    topic2.style.backgroundColor = "#5ddcff";
    topic2.style.transform = "scale(1.1)";
    topic1.style.backgroundColor = "#4a5374";
    topic1.style.transform = "scale(1)";
    topic3.style.backgroundColor = "#4a5374";
    topic3.style.transform = "scale(1)";
    topic4.style.backgroundColor = "#4a5374";
    topic4.style.transform = "scale(1)";
    // topicInfo1.style.zIndex = "-20";
    topicInfo2.style.display = "flex";
    topicInfo3.style.display = "none";
    topicInfo4.style.display = "none";
    
    if(topic1Active == false){
        photo.style.transform ="translate(calc(75vw - 300px),-20vh)	";
        photo.style.width = "100px";
        photo.style.height = "100px";
        photo.style.transitionDuration = "1s";
        myName.style.transform ="translate(calc(55vw - 350px),-21vh)";
        myName.style.transitionDuration = "1s";
    }
});
topic2.addEventListener("mouseover",()=>{
    if(topic2Active == false){
        topic2.style.backgroundColor = "#5da9ff";
        topic2.style.transform = "scale(1.1)";
    }
});
topic2.addEventListener("mouseout",()=>{
    if(topic2Active==false){
        topic2.style.backgroundColor = "#4a5374";
        topic2.style.transform = "scale(1)";
    }
});
topic3.addEventListener("click",()=>{
    topic3Active = true;
    topic1Active = false;
    topic2Active = false;
    topic4Active = false;
    topic3.style.backgroundColor = "#5ddcff";
    topic3.style.transform = "scale(1.1)";
    topic1.style.backgroundColor = "#4a5374";
    topic1.style.transform = "scale(1)";
    topic2.style.backgroundColor = "#4a5374";
    topic2.style.transform = "scale(1)";
    topic4.style.backgroundColor = "#4a5374";
    topic4.style.transform = "scale(1)";
    topicInfo2.style.display = "none";
    topicInfo3.style.display = "flex";
    topicInfo4.style.display = "none";
    if(topic1Active == false){
        photo.style.transform ="translate(calc(75vw - 300px),-20vh)	";
        photo.style.width = "100px";
        photo.style.height = "100px";
        photo.style.transitionDuration = "1s";
        myName.style.transform ="translate(calc(55vw - 350px),-21vh)";
        myName.style.transitionDuration = "1s";
    }
})
topic3.addEventListener("mouseover",()=>{
    if(topic3Active == false){
        topic3.style.backgroundColor = "#5da9ff";
        topic3.style.transform = "scale(1.1)";
    }
});
topic3.addEventListener("mouseout",()=>{
    if(topic3Active==false){
        topic3.style.backgroundColor = "#4a5374";
        topic3.style.transform = "scale(1)";
    }
});
topic4.addEventListener("click",()=>{
    topic4Active = true;
    topic1Active = false;
    topic2Active = false;
    topic3Active = false;
    topic4.style.backgroundColor = "#5ddcff";
    topic4.style.transform = "scale(1.1)";
    topic1.style.backgroundColor = "#4a5374";
    topic1.style.transform = "scale(1)";
    topic2.style.backgroundColor = "#4a5374";
    topic2.style.transform = "scale(1)";
    topic3.style.backgroundColor = "#4a5374";
    topic3.style.transform = "scale(1)";
    topicInfo2.style.display = "none";
    topicInfo3.style.display = "none";
    topicInfo4.style.display = "flex";
    if(topic1Active == false){
        photo.style.transform ="translate(calc(75vw - 300px),-20vh)	";
        photo.style.width = "100px";
        photo.style.height = "100px";
        photo.style.transitionDuration = "1s";
        myName.style.transform ="translate(calc(55vw - 350px),-21vh)";
        myName.style.transitionDuration = "1s";
    }
});
topic4.addEventListener("mouseover",()=>{
    if(topic4Active == false){
        topic4.style.backgroundColor = "#5da9ff";
        topic4.style.transform = "scale(1.1)";
    }
});
topic4.addEventListener("mouseout",()=>{
    if(topic4Active==false){
        topic4.style.backgroundColor = "#4a5374";
        topic4.style.transform = "scale(1)";
    }
});


var sliderBox = document.querySelector(".slider-box");
var buttons1 = document.querySelector("#buttons1");
var buttons2 = document.querySelector("#buttons2");
var buttons3 = document.querySelector("#buttons3");
var buttons4 = document.querySelector("#buttons4");
buttons1.addEventListener('click',()=>{
    sliderBox.style.left = "0%";
    sliderBox.style.transitionDuration = "1s";
    buttons1.style.backgroundColor = "#5ddcff";
    buttons2.style.backgroundColor = "#4a5374";
    buttons3.style.backgroundColor = "#4a5374";
    buttons4.style.backgroundColor = "#4a5374";
});
buttons2.addEventListener('click',()=>{
    sliderBox.style.left = "-78.5%";
    sliderBox.style.transitionDuration = "1s";
    buttons1.style.backgroundColor = "#4a5374";
    buttons2.style.backgroundColor = "#5ddcff";
    buttons3.style.backgroundColor = "#4a5374";
    buttons4.style.backgroundColor = "#4a5374";
});
buttons3.addEventListener('click',()=>{
    sliderBox.style.left = "-157.5%";
    sliderBox.style.transitionDuration = "1s";
    buttons1.style.backgroundColor = "#4a5374";
    buttons2.style.backgroundColor = "#4a5374";
    buttons3.style.backgroundColor = "#5ddcff";
    buttons4.style.backgroundColor = "#4a5374";
});
buttons4.addEventListener('click',()=>{
    sliderBox.style.left = "-236.25%";
    sliderBox.style.transitionDuration = "1s";
    buttons1.style.backgroundColor = "#4a5374";
    buttons2.style.backgroundColor = "#4a5374";
    buttons3.style.backgroundColor = "#4a5374";
    buttons4.style.backgroundColor = "#5ddcff";
});
