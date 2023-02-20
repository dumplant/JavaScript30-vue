<template>
    <div id="canvas">
        <p>123</p>
        <canvas id="draw" width="800" height="800"></canvas>
    </div>
</template>

<script>
let canvas;
let ctx;
export default {
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
            this.drawCanvas()
        },
        drawCanvas() {
            ctx.beginPath();
            ctx.moveTo(20, 20);
            ctx.lineTo(140, 70);
            ctx.lineWidth = 1.0;
            ctx.strokeStyle = '#cc0000'
            ctx.stroke()
        }
    }
}
</script>

<style scoped></style>