<template>
  <div class="flexbox">
    <v-header></v-header>
    <div class="wrapper">
      <div class="flex-container">
        <div class="box one">
          <div class="title">
            <h1>Başlık</h1>
          </div>
          <div class="image">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg" alt="">
          </div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'flexbox',
  components: { 'v-header': header },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wrapper{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(189, 195, 199,1.0);
  .flex-container{
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .box{
      height: 400px;
      width: 300px;
      min-width: 200px;
    }
    .one{
      flex: 1;
      background-color: rgba(26, 188, 156,1.0);
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        background-color: rgba(236, 240, 241,0.5);
        flex: 1;
        display: flex;
        align-items: center;
      }
      .image{
        background-color: rgba(236, 240, 241,0.5);
        flex: 1;
        img{
          width: 100px;
        }
      }
      .content{
        flex: 1;
        background-color: rgba(236, 240, 241,0.5);
        display: flex;
        padding: 20px;
        align-items: center;
      }
    }
    .two{
      flex: 1;
      background-color: rgba(241, 196, 15,1.0);
    }
    .three{
      flex: 1;
      background-color: rgba(41, 128, 185,1.0);
    }
    .four{
      flex: 1;
      background-color: rgba(231, 76, 60,1.0);
    }
    .five{
      flex: 1;
      background-color: rgba(52, 73, 94,1.0);
    }
  }
}

</style>
