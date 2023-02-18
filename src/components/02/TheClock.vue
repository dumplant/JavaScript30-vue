
<template>
    <div class="background">
        <div class="clock">
            <div class="clock-face">
                <div class="hand hour-hand" :style="{ transform: hourStyle }"></div>
                <div class="hand min-hand" :style="{ transform: minuteStyle }"></div>
                <div class="hand second-hand" :style="{ transform: secondStyle }"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            secondDeg: 0,
            minuteDeg: 0,
            hourDeg: 0
        }
    },
    computed: {
        secondStyle() {
            return `rotate(${this.secondDeg}deg)`
        },
        minuteStyle() {
            return `rotate(${this.minuteDeg}deg)`
        },
        hourStyle() {
            return `rotate(${this.hourDeg}deg)`
        }
    },
    methods: {
        setDate() {
            const date = new Date();
            const seconds = date.getSeconds();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            this.secondDeg = 90 + (seconds / 60) * 360;
            this.minuteDeg = 90 + (minutes / 60) * 360 + (seconds / 60 / 60) * 360;
            this.hourDeg = 90 + (hours / 12) * 360 + (minutes / 60 / 12) * 360;

        },
        updateDate() {
            this.secondDeg += 1 / 60 * 360;
            this.minuteDeg += 1 / 60 / 60 * 360;
            this.hourDeg += 1 / 60 / 60 / 12 * 360;
        }
    },
    mounted() {
        this.setDate();
        setInterval(this.updateDate, 1000);
    }
}
</script>
<style scoped>
.background {
    background: #018DED url(https://unsplash.it/1500/1000?image=881&blur=5);
    background-size: cover;
    font-family: 'helvetica neue';
    text-align: center;
    margin: 0;
    font-size: 2rem;
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
}

.clock {
    width: 30rem;
    height: 30rem;
    border: 20px solid white;
    border-radius: 50%;
    margin: 50px auto;
    position: relative;
    padding: 2rem;
    box-shadow:
        0 0 0 4px rgba(0, 0, 0, 0.1),
        inset 0 0 0 3px #EFEFEF,
        inset 0 0 10px black,
        0 0 10px rgba(0, 0, 0, 0.2);
}

.clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    transform: translateY(-3px);
    /* account for the height of the clock hands */
}

.hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.hour-hand {
    /* width: 80%; */
    height: 10px;
    background: rgb(96, 96, 96);
}

.second-hand {
    background-color: red;
}
</style>