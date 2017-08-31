<template>
  <div class="vuecss">
    <v-header></v-header>
    <h1>Dynamic Css</h1>
    <h2>Example 1</h2>
    <div class="kare" v-bind:class="{renk:true,border:on}"></div>
    <h2>Example 2</h2>
    <button type="button" name="button" v-on:click="on=!on" >Border</button>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'vuecss',
  components: {'v-header':header},
  data () {
    return {
      on:true,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .kare{
    height: 300px;
    width: 300px;
  }
  .renk{
    background-color: red;
  }
  .border{
    border: 5px solid grey;
  }
  button{
    background-color: grey;
    width: 100px;
    height: 50px;
  }

</style>
