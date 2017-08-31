<template>
  <div class="banner">
    <v-header></v-header>
    <div class="banner1">
      <div class="wrapper">
        <div class="text">
          <h1>Yanlız Ada</h1>
        </div>
      </div>
    </div>
    <div class="banner2">
      <div class="wrapper">
        <img src="../assets/images/image2.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'banner',
  components: {'v-header':header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style lang="scss" scoped>
.banner1{
  max-width: 1200px;
  background-color: rgba(189, 195, 199,1.0);
  margin: 0 auto;
  .wrapper{
    height: 50vh;
    background-image: url("../assets/images/image1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size:contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.banner2{
  img{
    width: 100%;
  }
}
</style>
