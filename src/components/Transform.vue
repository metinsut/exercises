<template lang="html">
  <div class="Transform">
    <v-header></v-header>
    <div class="wrapper">
      <div class="translate">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="rotate">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="scale">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="skewX">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="skewY">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="skew">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="matrix">
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name:'Transform',
  components: {'v-header':header},
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

.translate{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(142, 68, 173,1.0);
    transform: translate(50%);
  }
}
.rotate{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(12, 88, 173,1.0);
    transform: rotate(45deg);
  }
}
.scale{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(142, 68, 173,1.0);
    transform: scale(1,2);
  }
}
.skewX{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(142, 68, 173,1.0);
    transform: skewX(45deg);
  }
}
.skewY{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(142, 68, 173,1.0);
    transform: skewY(10deg);
  }
}
.skew{
  .icon{
    width: 100px;
    height: 100px;
    background-color: rgba(142, 68, 173,1.0);
    transform: skew(10deg, 10deg);
  }
}

</style>
