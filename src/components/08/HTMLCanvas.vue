<template>
    <div id="canvas">
        <canvas id="draw" 
        @mousedown="setDraw($event)" 
        @mousemove="draw($event)"
        @mouseup="setNotDraw($event)"
        @mouseout="setNotDraw($event)"
        @touchstart="setDraw($event)" 
        @touchmove="draw($event)"
        @touchend="setNotDraw($event)"
        @touchcancel="setNotDraw($event)"></canvas>
    </div>
</template>

<script>
let canvas;
let ctx;
export default {
    data() {
        return {
            drawing: false,
            lastX: 0,
            lastY: 0,
            hue: 0
        }
    },
    mounted() {
        this.initCanvas()
    },
    methods: {
        initCanvas() {
            console.log("初始化canvas")
            canvas = document.getElementById('draw');
            ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.lineWidth = 90;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
        },
        setDraw(e) {
            this.drawing = true;
            if (e.type == "mousedown") {
                [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
            } else {
                [this.lastX, this.lastY] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
            }
            
        },
        setNotDraw() {
            this.drawing = false;
        },
        draw(e) {
            if (this.drawing) {
                ctx.strokeStyle = `hsl(${this.hue}, 90%, 50%)`;
                if (this.hue >= 360) this.hue = 0;
                this.hue++;
                let x;
                let y;
                if (e.type == "mousemove") {
                    x = e.offsetX;
                    y = e.offsetY;
                } else {
                    x = e.changedTouches[0].clientX;
                    y = e.changedTouches[0].clientY;
                }
                

                ctx.beginPath();

                ctx.moveTo(this.lastX, this.lastY);
                ctx.lineTo(x, y);
                ctx.stroke();
                [this.lastX, this.lastY] = [x, y];
            }
        }
    }
}
</script>

<style scoped></style>