<template>
  <nav class="navbar">
    <div class="logo">
      ChatGPT Voice Assistant
    </div>
    <div class="nav-links">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(247,247,248,var(--tw-bg-opacity));
  height: 55px;
  padding-left: 30px;
  padding-right: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.logo {
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  color: #362b2b;
  font-family: 'Lucida Handwriting';
}

.logo-small {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #362b2b;
  font-family: 'Lucida Handwriting';
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 10px 15px;
  text-decoration: none;
  color: darkgreen;
}

.nav-item:hover {
  background-color: white;
  cursor: pointer;
}

.nav-item:hover {
  color: darkgreen;
}

.logo img {
  width: 175px;
  vertical-align: middle;
}
</style>
