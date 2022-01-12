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
    b = new p5.Vector(200, 60).mult(2)
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
    strokeWeight(5)
    stroke(0, 0, 70)

    let origin = new p5.Vector(100, 200)
    let mouse = new p5.Vector(mouseX, mouseY)

    // set vector 'a' to where our mouse cursor is
    a = new p5.Vector.sub(mouse, origin)

    // draw a line from our origin to vectors a and b
    drawArrow(origin, createVector(origin.x+a.x, origin.y+a.y))
    drawArrow(origin, createVector(origin.x+b.x, origin.y+b.y))

    let v = vectorProjection(a, b)
    stroke(201, 96, 83, 75) // blue
    strokeWeight(3)
    drawArrow(origin, createVector(origin.x+v.x, origin.y+v.y))

    // draw the normal
    strokeWeight(1)
    drawingContext.setLineDash([5, 5]);
    stroke(0, 0, 80)

    // base of normal vector
    // let base = new p5.Vector(origin.x+v.x, origin.y+v.y)
    line(origin.x+v.x, origin.y+v.y, mouseX, mouseY)

    drawingContext.setLineDash([]);
}


/* draws an arrow from our start vector to our end vector */
function drawArrow(start, end) {
    let diff = p5.Vector.sub(end, start)
    push()
    translate(start.x, start.y)
    rotate(diff.heading())

    let r = diff.mag()
    line(0, 0, r, 0)
    line(r, 0, r-3, -3)
    line(r, 0, r-3, 3)
    pop()
}