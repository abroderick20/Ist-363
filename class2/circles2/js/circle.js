class Circle{
    constructor(x,y,d) {
        this.x=x;
        this.y=y;
        this.d=d;
        this.isGrowing= true;

    }
    draw() {
        circle(this.x, this.y, this.d);
    }
    update(){
        if (this.isGrowing) {
        this.d += 1;
    } else {
        this.d -= 1;
    }
    if (this.d>maxDiameter) {
        this.isGrowing= false;
    }
    //minimum boundary
    if (this.d<minDiameter) {
        this.isGrowing= true;
    }

    }
}