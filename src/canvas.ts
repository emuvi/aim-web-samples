const viewer = document.getElementById("viewer") as HTMLCanvasElement;
const drawer = viewer.getContext("2d");

const state = new Array<Drawable>();

interface Drawable {
    draw(drawer: CanvasRenderingContext2D): void;
}

function drawState() {
    drawer.clearRect(0, 0, viewer.width, viewer.height);
    for (const element of state) {
        element.draw(drawer);
    }
}

viewer.addEventListener("mousedown", function (e) {
    state.push(new Circle(e.offsetX, e.offsetY, 100, "red"));
    drawState();
});

function resizeViewer() {
    viewer.width = window.innerWidth;
    viewer.height = window.innerHeight;
    drawState();
}
window.addEventListener('resize', resizeViewer, false);
resizeViewer();

class Circle implements Drawable {
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(drawer: CanvasRenderingContext2D): void {
        drawer.beginPath();
        drawer.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        drawer.fillStyle = this.color;
        drawer.fill();
    }
};