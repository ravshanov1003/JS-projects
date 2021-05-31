const PI = 3.14
class circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return PI * this.radius ** 2;
    }
    getPeremeter() {
        return 2 * PI * this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
}
const s1 = new circle(5);
console.log(s1.getArea());
console.log(s1.getPeremeter);
s1.setRadius(7);
console.log(s1.getArea());
console.log(s1.getPeremeter());