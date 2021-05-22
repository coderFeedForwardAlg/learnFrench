// brocken , last card will not load, may not be part of "cards" array 

let sound = [];
let soundNames = ['yesImg.mp3','a.mp3','b.mp3','c.mp3','c.mp3'];
let img = [];
let imgNames = ['https://tse1.mm.bing.net/th?id=OIP.33awoIoRnL_CobSqjbenoAHaHf&pid=Api','https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb0d6817-9644-439f-8a5e-49f212146135/dc2f5v3-b7d5fb0b-bca3-4bcc-b357-0a4542201a4f.jpg/v1/fill/w_1024,h_629,q_75,strp/waving_emoji_png_by_prakashsingh_dc2f5v3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI5IiwicGF0aCI6IlwvZlwvZmIwZDY4MTctOTY0NC00MzlmLThhNWUtNDlmMjEyMTQ2MTM1XC9kYzJmNXYzLWI3ZDVmYjBiLWJjYTMtNGJjYy1iMzU3LTBhNDU0MjIwMWE0Zi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yZcD5HzqGIsnGqHsmptHwSK-KN1Td44_Twdph1Ah50M','https://tse3.mm.bing.net/th?id=OIP.pRieGQpsEsT3EQ-Xfvyj7gHaHa&pid=Api','https://physicsworld.com/wp-content/uploads/2019/05/Brain.jpg','https://img3.looper.com/img/gallery/exclusive-clip-disney-television-animations-gravity-falls-x-line-rider-the-first-in-a-brand-new-series/l-intro-1599772107.jpg'];
let cards = [];
    // increments what card you are on
let cardThatYourOn = 0;
function nextFunc(){
  if(soundNames.length > cardThatYourOn){
    cardThatYourOn++;
    rect(windowWidth/2,windowHeight/2,275,200);
  }
  console.log(cards);
}
let canvis;
let lastLoadedIndex = 0;


function setup() {

    // basic set up 
  canvis = createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  rectMode(CENTER);
  fill(200,0,200);
  rect(windowWidth/2,windowHeight/2,275,200);
      // kick off the loading callback proses 
  loadImg();
}

function loadImg(){
  img.push(loadImage(imgNames[lastLoadedIndex], imageLoaded));
}
    // call backs 
function imageLoaded(){
  sound.push(loadSound(soundNames[lastLoadedIndex], soundLoaded));
  console.log("lastLoadedIndex got incremented");
}


function soundLoaded(){
  cards.push(new Card(img[lastLoadedIndex],sound[lastLoadedIndex]));
  if(lastLoadedIndex < soundNames.length +1){
    lastLoadedIndex++;
    loadImg();
    
  }
}


function draw(){
  if(cards.length > cardThatYourOn){
    cards[cardThatYourOn].display();
  }
}

function mousePressed(){
  
}




/*
TODO:

make card that can 
      * displays and image
      * be cliked 

make it play a sound when ckliked 





*/


function Card(img,sound){
  this.img = img;
  this.sound = sound;
  

  
  


  this.display = function(){
          // play button 
      this.P = createElement("Button",["play sound "]);
      this.P.position(windowWidth/2 - 138,windowHeight/2+78);
      this.P.mousePressed(makeNois);

          //show imange button 
      this.I = createElement("Button",["show image"]);
      this.I.position(windowWidth/2  -62,windowHeight/2+78);
      this.I.mousePressed(showImage);

  }
  
    


}

function makeNois(){
  if (cards[cardThatYourOn].sound.isPlaying()) {
    cards[cardThatYourOn].sound.stop();
  } else {
    cards[cardThatYourOn].sound.play();
  }
}

function showImage(){
  imageMode(CENTER);
  image(cards[cardThatYourOn].img,windowWidth/2,windowHeight/2,275,200);
}



/*
deliwhere bridg 
first exit 

intrpritve center

*/

function intro(){
  //rect(500,500,500,500);
}
