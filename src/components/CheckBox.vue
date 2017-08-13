<template>
  <div class="checkbox">
    <v-header></v-header>
    <div class="wrapper">
      <div class="section">
        <label>
          <input type="checkbox" name="check" v-model="value">
          <span class="text">Checkbox</span>
        </label>
        <label>
          <input type="checkbox" name="check" v-model="value" disabled>
          <span class="text">Checkbox</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/layout/header'
export default {
  name: 'checkbox',
  components: {'v-header':header},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/common/common";

.section {
  color: #424242;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    cursor: pointer;
    padding: 25px;
    font-size: 2em;
    input[type="checkbox"] {
      display: none;
      &:checked {
        +.text:before {
          content:"\f14a";
          font-family:'FontAwesome';
          color: rgba(52, 152, 219,1.0);
          animation: (tick 300ms  ease-in);
        }
      }
      &:disabled {
        +.text {
          color: rgba(189, 195, 199,1.0);
        }
        +.text:before {
          content: "\f0c8";
          color: rgba(189, 195, 199,1.0);
          animation: none;
        }
      }
    }
    .text:before {
      content:"\f096";
      font-family:'FontAwesome';
      display: inline-block;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      speak: none;
      line-height: 1;
      width: 1.5em;
      color: rgba(52, 152, 219,1.0);
    }
  }
}

@keyframes tick {
  0% {
    transform: scale(0);
  }
  90% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
