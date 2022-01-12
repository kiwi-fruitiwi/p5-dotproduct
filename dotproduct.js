/*

@author Kiwi
@date 2021-11-22

based on Daniel Shiffman's 5.6 Vector Dot Product (Scalar Projection)
The Nature of Code https://youtu.be/DHPfoqiE4yQ



 */
let font, a, b


function preload() {
    font = loadFont('data/meiryo.ttf')
}


function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    a = new p5.Vector(100, -60)
    b = new p5.Vector(200, 60)
}


/* find the scalar projection of two vectors, a and b. returns a scalar! */
function scalarProjection(a, b) {
    let bCopy = b.copy().normalize()
    return a.dot(bCopy)
}


/*  the scalar projection is a scalar value. to see a vector projection,
    you can take the vector b, make a copy of it, and set its magnitude
    to the scalar projection!
 */
function vectorProjection(a, b) {
    let bCopy = b.copy().normalize()

    bCopy.mult(scalarProjection(a, b))
    return bCopy
}


function draw() {
    background(234, 34, 24)
    strokeWeight(3)
    stroke(0, 0, 70)

    let origin = new p5.Vector(100, 200)
    let mouse = new p5.Vector(mouseX, mouseY)

    // set vector 'a' to where our mouse cursor is
    a = new p5.Vector.sub(mouse, origin)

    // draw a line from our origin to vectors a and b
    line(origin.x, origin.y, origin.x+a.x, origin.y+a.y)
    line(origin.x, origin.y, origin.x+b.x, origin.y+b.y)

    let v = vectorProjection(a, b)
    stroke(201, 96, 83) // blue
    line(origin.x, origin.y, origin.x+v.x, origin.y+v.y)

    // draw the normal
    strokeWeight(1)
    stroke(0, 0, 80)
    line(origin.x+v.x, origin.y+v.y, mouse.x, mouse.y)
}


function drawArrow() {

    /*
       	protected void show_acc_vector(PApplet app) {
		app.pushMatrix();
		app.translate(pos.x, pos.y);
		app.stroke(200, 100, 100, 50);
		app.strokeWeight(2);
		app.rotate(acc.heading());
		float r = acc.mag() * ACC_VECTOR_SCALE;
		app.line(0, 0, r, 0); // main acceleration vector
		app.line(r, 0, r - 3, -3); // bottom arrow half
		app.line(r, 0, r - 3, 3); // top arrow half
		app.popMatrix();
	}
     */
}