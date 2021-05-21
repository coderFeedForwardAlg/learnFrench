function Card(img,sound){
    this.img = img;
    this.sound = sound;
    imageMode(CENTER);


    this.display = function(){
        image(this.img,200,200,200,200);
    }

    this.playSound = function(){
        let d = dist(mouseX,mouseY,200,200);
        if(d<100){
          this.sound.play();
        }
      }

}