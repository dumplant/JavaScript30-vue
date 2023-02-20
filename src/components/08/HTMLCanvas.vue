<template>
    <div id="canvas">

        <canvas id="draw" @mousedown="setMouse($event)" @mouseup="setMouse($event)" @mousemove="draw($event)"></canvas>
    </div>
</template>

<script>
let canvas;
let ctx;
export default {
    data() {
        return {
            mouseIsPressed: false,
            lastX: 0,
            lastY: 0,
            hue: 0
        }
    },
    mounted() {
        this.initCanvas()
        window.onresize = () => {
            this.initCanvas()
        }
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
        setMouse(e) {
            this.mouseIsPressed = !this.mouseIsPressed;
            [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
        },
        draw(e) {
            if (this.mouseIsPressed) {

                
                ctx.strokeStyle = `hsl(${this.hue}, 90%, 50%)`;
                if (this.hue >= 360) this.hue = 0;
                this.hue++;

                let x = e.offsetX;
                let y = e.offsetY;

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