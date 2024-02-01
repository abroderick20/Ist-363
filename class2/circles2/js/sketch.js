const canvas = {
    width: 800,
    height: 800,


}

const totalCircles=100;
const minDiameter= 10;
const maxDiameter= 100;
const circles= [];

function setup() {
    createCanvas(canvas.width,canvas.height);
   ;
    for(let i=0; i<totalCircles; i++){
        const circleSettings= {
            x: random(1, canvas.width),
            y: random(1, canvas.height),
            d: random(minDiameter, maxDiameter)
        }
        const myCircle = new Circle(circleSettings.x,circleSettings.y, circleSettings.d);
        circles.push(myCircle);
    }

}
function draw(){ background(0)
   //noLoop(); //turn off default looping
    noStroke();
    for (let i= 0; i<circles.length; i++) {
        circles[i].update();
        circles[i].draw();

    }

    //for loop requires a counter, condition and incrememt
   //  for (let i=0; i<totalCircles; i++) {

    
    // x,y,diameter
 //   const circleSettings= {
  //       x: random(1, canvas.width),
   //      y: random(1, canvas.height),
   //      d: random(10, 100)
    }
   //  const randomX = random(1, canvas.width);
   //  const randomY = random(1, canvas.height)
   //  const randomD = random(minDiameter,maxDiameter);

    // circle(circleSettings.x,circleSettings.y,circleSettings.d); 
   
  //}
//}