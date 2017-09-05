<template>
  <div class="select">
    <v-header></v-header>
    <div class="wrapper">
      <div class="row">
        <div class="selectGroup">
          <div class="input" v-on:click="on=!on">
            <label>{{selected}}</label>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
            <div class="list" v-bind:class="{visible: on}">
              <ul v-for="item in items">
                <li v-on:click="changeSelected(this.event)">{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="detail" id="mtn">
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
      on: true,
      items: ["Select1", "Select2", "Select3", "Select4", "Select5", "Select6"],
      selected: "Select1"
    }
  },
  methods: {
    changeSelected(event) {
      this.selected = event.target.innerHTML
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    background-color: rgba(127, 140, 141,1.0);
    .input {
      position: relative;
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
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .list {
      &.visible {
        display: none;
      }
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      overflow: auto;
      max-height: 200px;
      background-color: rgba(236, 240, 241, 1.0);
      ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        width: 100%;
        li {
          height: 30px;
          width: 100%;
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background-color: rgba(149, 165, 166, 1.0);
          }
          &:active {
            color: rgba(52, 152, 219,1.0);
          }
        }
      }
    }
  }
}
</style>
