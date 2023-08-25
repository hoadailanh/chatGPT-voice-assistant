<template>
  <div class="main">
    <HeaderBar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  /*background-color:rgb(147, 237, 253);*/
  /*background-image: url('assets/background3.png');*/

  /*height: 100%;*/

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-color: rgba(255,255,255,0.6);
  background-blend-mode: lighten;*/
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.content {
  /*color:rgb(33, 24, 6);*/
  padding: 10px;
  text-align: center;
  color: #362b2b;
}
</style>
