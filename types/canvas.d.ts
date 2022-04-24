declare const viewer: HTMLCanvasElement;
declare const drawer: CanvasRenderingContext2D;
declare const state: Drawable[];
interface Drawable {
    draw(drawer: CanvasRenderingContext2D): void;
}
declare function drawState(): void;
declare function resizeViewer(): void;
declare class Circle implements Drawable {
    x: number;
    y: number;
    radius: number;
    color: string;
    constructor(x: number, y: number, radius: number, color: string);
    draw(drawer: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=canvas.d.ts.map