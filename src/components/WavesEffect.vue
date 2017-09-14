<template>
    <div class="waveseffect">
        <v-header></v-header>
        <div class="wrapper">
            <button v-on:click="clickButton">Click</button>
        </div>
    </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
    name: 'waveseffect',
    components: { 'v-header': header },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        clickButton: (e) => {
            
            var circle = document.createElement('div');
            this.appendChild(circle);

            circle.classList.add('ripple');
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

button {
    font-family: "Roboto";
    font-size: 24px;
    padding: 1em 2em;
    margin: 3px;
    border: 0;
    outline: 0;
    color: white;
    background-color: #2196F3;
    text-transform: uppercase;
    border-radius: 0.15em;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: relative;
}

button .ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    transform: scale(0);
    animation: ripple 0.6s linear;
}


</style>
