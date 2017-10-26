<template>
    <div class="home">
        <v-header></v-header>
        <div class="wrapper">
            <div class="border1"></div>
            <br>
            <div class="border2"></div>
            <br>
            <div class="border3"></div>
            <br>
            <div class="border4"></div>
            <br>
            <div class="border5"></div>
            <br>
            <div class="tooltip">
                <p>Hover for Tool Tip</p>
                <div class="tooltiptext">
                    <p>Tool Tip</p>
                    <div class="arrow"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from "@/components/layout/header";
    
    export default {
        name: "home",
        components: {
            "v-header": header
        },
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "../assets/common/common";
    .border1 {
        height: 0;
        width: 0;
        border: medium solid white;
        border-width: 10px 10px 10px 10px;
        border-color: red blue orange green;
    }
    
    
    .border2 {
        height: 0;
        width: 0;
        border: medium solid white;
        border-width: 10px 10px 10px 10px;
        border-color: transparent transparent transparent green;
    }
    
    
    .border3 {
        height: 0;
        width: 0;
        border: medium solid white;
        border-width: 10px 10px 10px 10px;
        border-color: transparent transparent orange transparent;
    }
    
    
    .border4 {
        height: 0;
        width: 0;
        border: medium solid white;
        border-width: 10px 10px 10px 10px;
        border-color: transparent blue transparent transparent;
    }
    
    
    .border5 {
        height: 0;
        width: 0;
        border: medium solid white;
        border-width: 10px 10px 10px 10px;
        border-color: red transparent transparent transparent;
    }
    
    
    .tooltip {
        position: relative;
        width: 150px;
        height: 100px;
        background-color: orange;
        display: flex;
        justify-content: center;
        align-items: center;
        .test {
            width: 20px;
            height: 20px;
            background-color: teal;
        }

        .tooltiptext {
        visibility: hidden;
        background-color: #555;
        color: #fff;
        border-radius: 13px;
        padding: 13px;
        position: absolute;
        top:-60px;
        z-index: 1;
        opacity: 0;
        transition: opacity 1s;
        display: flex;
        justify-content: center;
        .arrow {
            position: absolute;
            width: 0;
            height: 0;
            bottom:-20px;
        border-width: 10px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
        }
        }
    
        &:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
     }
    }
</style>
