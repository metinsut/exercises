<template>
  <div class="checkbox2">
    <v-header></v-header>
    <div class="wrapper">
      <h1>CheckBox With Images</h1>
      <hr>
      <br>
      <div class="row">
        <div class="checkboxGroup">
          <input type="checkbox" name="küçük" id="küçük" value="küçük" v-model="size">
          <label for="küçük">Küçük</label>
        </div>
        <div class="checkboxGroup">
          <input type="checkbox" name="orta" id="orta" value="orta" v-model="size">
          <label for="orta">Orta</label>
        </div>
        <div class="checkboxGroup">
          <input type="checkbox" name="büyük" id="büyük" value="büyük" v-model="size">
          <label for="büyük">Büyük</label>
        </div>
        <br>
        <p>Sizes: {{size}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'checkbox2',
  components: { 'v-header': header },
  data() {
    return {
      size: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/common/common";

.wrapper {
  .row {
    display: flex;
    flex-direction: column;
    .checkboxGroup {
      input[type="checkbox"] {
        opacity: 0;
        width: 0;
        margin: 0;
        &:checked + label[for="küçük"],
        &:checked + label[for="orta"],
        &:checked + label[for="büyük"] {
            background-position: 0 -65px;
            color: rgba(192, 57, 43,1.0);
        }
      }
      label[for="küçük"], label[for="orta"], label[for="büyük"] {
        background: url(../assets/images/checks.png) no-repeat;
        background-position: 0 -100px;
        padding-left: 26px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
