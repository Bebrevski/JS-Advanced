class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(5);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);
circle.diameter = 20;
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area);