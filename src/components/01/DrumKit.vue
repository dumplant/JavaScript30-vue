<template>
    <div class="day1">
        <div class="keys">
            <div v-for="key in keys" :key="key.id" class="key" :class="{ playing: (pressed && key.name === this.pressedKey) }">
                <span class="kdb">{{ key.name }}</span>
                <span class="sound">{{ key.sound }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            pressedKey: '',
            pressed: false,
            keys: [
                { name: "A", sound: "clap" },
                { name: "S", sound: "hihat" },
                { name: "D", sound: "kick" },
                { name: "F", sound: "openhat" },
                { name: "G", sound: "boom" },
                { name: "H", sound: "ride" },
                { name: "J", sound: "snare" },
                { name: "K", sound: "tom" },
                { name: "L", sound: "tink" },
            ],
            audios: {
                A: new Audio(require("@/assets/01/sounds/clap.wav")),
                S: new Audio(require("@/assets/01/sounds/hihat.wav")),
                D: new Audio(require("@/assets/01/sounds/kick.wav")),
                F: new Audio(require("@/assets/01/sounds/openhat.wav")),
                G: new Audio(require("@/assets/01/sounds/boom.wav")),
                H: new Audio(require("@/assets/01/sounds/ride.wav")),
                J: new Audio(require("@/assets/01/sounds/snare.wav")),
                K: new Audio(require("@/assets/01/sounds/tom.wav")),
                L: new Audio(require("@/assets/01/sounds/tink.wav")),
            },
        }
    },
    methods: {
        playSound(e) {
            this.pressedKey = e.key.toUpperCase();
            this.pressed = true;

            let audio = this.audios[this.pressedKey];
            if (audio) {
                audio.play();
            }
        },
        removePlaying() {
            this.pressedKey = '';
            this.pressed = false;
        }
    },
    mounted() {
        window.addEventListener("keydown", this.playSound);
        window.addEventListener("keyup", this.removePlaying);
    },
}
</script>

<style scoped>
.day1 {
    font-family: sans-serif;
    font-size: 10px;
    background: url('@/assets/01/background.jpg') bottom center;
    background-size: cover;
}


.keys {
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
}

.key {
    border: .4rem solid black;
    border-radius: .5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem .5rem;
    transition: all .07s ease;
    width: 10rem;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 .5rem black;
}

.playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
}

span.kdb {
    display: block;
    font-size: 4rem;
}

.sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #ffc600;
}
</style>