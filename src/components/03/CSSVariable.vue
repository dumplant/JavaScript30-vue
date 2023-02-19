<template>
    <div class="cssVariable">
        <h2>Update CSS Variables with <span :style="js">JS</span></h2>

        <div class="controls">
            <label for="spacing"> Spacing: </label>
            <input id="spacing" type="range" name="spacing" min="10" max="200" v-model="this.spacing" data-sizing="px">

            <label for="blur"> Blur: </label>
            <input id="blur" type="range" name="blur" min="0" max="25" v-model="this.blurValue" data-sizing="px">

            <label for="base"> Base Color: </label>
            <input id="base" type="color" name="base" v-model="this.base">
        </div>

        <p>spacing : {{ spacing }},  Blur : {{ blurValue }},  color : {{ base }}</p>
        <img :style="imgStyle" src="https://source.unsplash.com/7bwQXzbF6KE/800x500">

    </div>
</template>

<script>
export default {
    computed: {
        js() {
            return {
                color: this.base
            }
        },
        imgStyle() {
            return {
                background: this.base,
                padding: this.spacing + 'px',
                filter: `blur(${this.blurValue}px)`
        }
    }
},
data() {
    return {
        base: "#ffc600",
        spacing: 10,
        blurValue: 0,
    }
}
}
</script>

<style scoped>


h2 {
    margin: 0;
}

.cssVariable {
    text-align: center;
    background: #193549;
    color: white;
    font-family: 'helvetica neue', sans-serif;
    font-weight: 100;
    font-size: 30px;
}

.controls {
    margin-bottom: 30px;
}

input {
    width: 100px;
}
</style>