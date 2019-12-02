<template>
  <div id="app">
    <header>
      <h1>Rubato</h1>
        <h2 v-if="user != null" :key="user.id">{{ user }}</h2>
      <nav>
      <ul>
        <li>
          <router-link :to="{name: 'Signup'}">Signup</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Login'}">Login</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Projects'}">Projects</router-link>
        </li>
      </ul>
      <button v-on:click="logout">Logout</button>
      </nav>
      </header>
      <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    user() {
      return this.$store.getters.username
      }
    },    
  methods: {
    logout(){
      fetch('http://localhost:3000/auth/logout', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
          },
          credentials: 'same-origin',
        }).then(localStorage.clear())
          this.$store.dispatch('logout')
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
