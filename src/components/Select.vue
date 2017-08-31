<template>
  <div class="select">
    <v-header></v-header>
    <div class="wrapper">
      <div class="row">
        <div class="selectGroup">
          <div class="input" v-on:click="on=!on">
            <label for="">Select</label>
            <div class="input-selection"></div>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
            <div class="list" v-bind:class="{visible: on}">
            <ul>
              <li>Select 1</li>
              <li>Select 2</li>
              <li>Select 3</li>
            </ul>
          </div>
          </div>
          <div class="detail">
            <p>Please select for value.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'select',
  components: { 'v-header': header },
  data() {
    return {
      on: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

.row {
  .selectGroup {
    width: 300px;
    height: 100px;
    background-color: rgba(231, 76, 60, 1.0);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    .input {
      position: relative;
      background-color: rgba(52, 152, 219, 1.0);
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 70px;
      font-size: 18px;
      cursor: pointer;
      label {
        cursor: pointer;
      }
    }
    .detail {
      background-color: rgba(155, 89, 182, 1.0);
      width: 100%;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list {
      &.visible {
        display: none;
      }
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      background-color: rgba(26, 188, 156,1.0);
      ul {
        display: flex;
        flex-direction: column;
        // width: 100%;
        list-style: none;
        background-color: rgba(127, 140, 141, 1.0);
      }
    }
  }
}
</style>
