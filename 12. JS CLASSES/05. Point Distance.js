class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static distance(p1, p2) {
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let point1 = new Point(5, 5);
let point2 = new Point(9, 8);
console.log(Point.distance(point1, point2));