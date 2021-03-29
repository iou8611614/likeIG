<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/accounts/signup">Signup</router-link> |
    <!-- <router-link to="/accounts/login/auth-switcher">Accounts</router-link> | -->
    <router-link to="/accounts/edit">Setting</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
*{
  position: relative;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
