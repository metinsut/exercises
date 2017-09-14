<template lang="html">
<div class="header">
  <div class="container">
    <div class="area-1">
      <div class="links">
        <router-link class="home" to='/'>Home</router-link>
        <router-link class="flexbox" to="/flexbox">Flexbox</router-link>
        <router-link class="button" to="/button">Button</router-link>
        <router-link class="banner" to="/banner">Banner</router-link>
        <router-link class="vuecss" to="/vuecss">VueCss</router-link>
        <router-link class="transform" to="/transform">Transform</router-link>
        <router-link class="animatedIcon" to="/animatedicon">Animated Icons</router-link>
        <router-link class="borderEfect" to="/borderefect">Border Efect</router-link>
        <router-link class="input" to="/input">Input</router-link>
        <router-link class="borderEfect2" to="/borderefect2">BorderEfect2</router-link>
        <router-link class="checkbox" to="/checkbox">Checkbox</router-link>
        <router-link class="checkbox2" to="/checkbox2">Checkbox2</router-link>
        <router-link class="slideshow" to="/slideshow">SlideShow</router-link>
        <router-link class="select" to="/select">Select</router-link>
        <router-link class="radio" to="/radio">Radio</router-link>
        <router-link class="switches" to="/switches">Switches</router-link>
        <router-link class="waveseffect" to="/waveseffect">WavesEffect</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss" scoped>
.container{
  background-color: rgba(52, 73, 94,1.0);
  display: flex;
  align-items: center;
  width: 100%;
  .area-1{
    display: flex;
    align-items: center;
    .links{
      display: flex;
      margin: 15px;
      align-items: center;
      display:flex;
      flex-wrap: wrap;
        *{
          margin: 15px;
          text-decoration: none;
          color: rgba(149, 165, 166,1.0);
          font-size: 13px;
          font-family: sans-serif;
        }
    }
  }
}
</style>
