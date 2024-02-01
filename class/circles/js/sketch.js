let canvasWidth = 800;
let canvasHeight= 800;

function setup() {
    //create a cancas to draw on // 800x800px
    createCanvas(canvasWidth,canvasHeight);

    //set the background color// 0 = black, 255=white
    background(0);
}
function draw() {
    //turn off default looping
    noLoop();
    noStroke();

 //fill("pink");

    // //x,y, diameter
    // circle(200,300,100);
    // fill(255,0,0);
    // circle(300,300,100);
    // circle(400,300,100);
    // circle(500,300,100);

    let circleDiameter= 50;
    let circleGap = 10;
    let totalCircles = 10;
    let totalRows=10;

    let startX = (canvasWidth - (circleDiameter * totalCircles) - (circleGap * totalCircles)-1)/2;
    let startY = (canvasWidth - (circleDiameter * totalRows) - (circleGap * totalRows)-1)/2;
    let circleX = startX;
    let circleY = startY;
   

    // counter, condition, increment
    for(let j=0;j<10; j++){  
       for (let i = 0; i<10; i++) {
        let randomDiameter =random(10,100);
        let randomRed =random(5,255);
        let randomGreen =random(0,255);
        let randomBlue =random(0,255);
        let randomAlpha =random(0,255);

        fill(randomRed,randomGreen,randomBlue,randomAlpha);
        circle(circleX,circleY,randomDiameter);
        //reset circleX
        circleX += (circleDiameter + circleGap);

    } // for loop end
    circleX =startX;
    //increment circleY
    circleY += (circleDiameter + circleGap);
}

} // draw function end