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
      <div class="flex-height">
        <div class="item b1">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="item b2">
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        </div>
        <div class="item b3">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
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
@import "../assets/common/common";

.flex-container{
  height: auto;
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
.flex-height{
  background-color: rgba(189, 195, 199,1.0);
  display: flex;
  align-items: flex-start;
  margin: 15px;
  .item {
    width: 30%;
    margin: 15px;
    background-color: rgba(155, 89, 182,1.0);
    p{
      word-wrap:break-word;
    }
  }
}

</style>
