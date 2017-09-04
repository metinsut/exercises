<template>
  <div class="switches">
    <v-header></v-header>
    <div class="wrapper">
      <div class="row">
        <label class="switch">
          <input type="checkbox">
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'switches',
  components: { 'v-header': header },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

.wrapper {
  .row {
    .switch {
      display: inline-block;
      position: relative;
      width: 40px;
      height: 14px;
      input {
        display: none;
        &:checked+.slider {
          background-color: #2196F3;
        }
        &:checked+.slider:after {
          transform: translateX(26px);
          background-color: #2196F3;
        }
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 34px;
        &:after {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: -5px;
          bottom: -5px;
          border-radius: 50%;
          background-color: white;
          transition: .4s;
          box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}
</style>
