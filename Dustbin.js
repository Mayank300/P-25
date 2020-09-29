// class Dustbin{
//     constructor(x, y, width, heigth ,options) {
//         var options = {
//             isStatic    : false, 
//             restitution : 0.5,
//             friction    : 0.5,
//             density     : 1.2
//         }
//         this.body = Bodies.rectangle(x, y, width, heigth, options);
//         this.heigth = heigth;
//         this.width = width;
//         this.image = loadImage("sprites/dustbingreen.png");
//     }
//     display(){
//     }
// }

class Dustbin extends BaseClass {
    constructor(x,y){
      super(x,y,width,height);
      this.width = width;
      this.height = height
      this.image = loadImage("sprites/paper.png");
    }
    display() {    
      super.display();
    }
  }
  