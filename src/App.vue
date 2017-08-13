<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@font-face {
	font-family: 'Roboto';
	src: url('./assets/fonts/Roboto-Regular.eot');
	src: url('./assets/fonts/Roboto-Regular.woff') format('woff'),
		url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}


*{
  margin: 0;
  padding: 0;
  font-family: Roboto;
  font-weight: 400;
}

body,html{
  background-color: white;
}

hr{
  width: 100%;
  height: 5px;
  color: rgba(192, 57, 43,1.0);
  background-color: rgba(192, 57, 43,1.0);
}
</style>
