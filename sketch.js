let sound = [];
let soundNames = ['a.mp3','b.mp3'];
let img = [];
let imgNames = ['https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb0d6817-9644-439f-8a5e-49f212146135/dc2f5v3-b7d5fb0b-bca3-4bcc-b357-0a4542201a4f.jpg/v1/fill/w_1024,h_629,q_75,strp/waving_emoji_png_by_prakashsingh_dc2f5v3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI5IiwicGF0aCI6IlwvZlwvZmIwZDY4MTctOTY0NC00MzlmLThhNWUtNDlmMjEyMTQ2MTM1XC9kYzJmNXYzLWI3ZDVmYjBiLWJjYTMtNGJjYy1iMzU3LTBhNDU0MjIwMWE0Zi5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yZcD5HzqGIsnGqHsmptHwSK-KN1Td44_Twdph1Ah50M','https://tse3.mm.bing.net/th?id=OIP.pRieGQpsEsT3EQ-Xfvyj7gHaHa&pid=Api'];
let cards = [];
    // increments what card you are on
let cardThatYourOn = 0;
function nextFunc(){
  // check if soundNames.length < cardThatYourOn
  cardThatYourOn++;
}
let canvis;
let lastLoadedIndex = 0;


function setup() {
    // basic set up 
  canvis = createCanvas(windowWidth, windowHeight);

  
  background(255, 0, 0);

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
  
  lastLoadedIndex++;
  loadImg();
  
}


function draw(){
  if(cards.length > cardThatYourOn){
    cards[cardThatYourOn].display();
  }
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
  

  imageMode(CENTER);
  


  this.display = function(){
      image(this.img,200,200,200,200);
      this.E = createElement("Button",["hello"]);
      this.E.position(300,300);
      this.E.mousePressed(makeNois);
  }
  
    


}

function makeNois(){
  if (sound[cardThatYourOn].isPlaying()) {
    sound[cardThatYourOn].stop();
  } else {
    sound[cardThatYourOn].play();
  }
}



/*
deliwhere bridg 
first exit 

intrpritve center

*/
