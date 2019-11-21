<template>
  <div id="app">
      <h1>Rubato</h1>
      <Signup v-on:add-user="signUp"/>
      <br/>
      <br/>
      <Login v-on:login="login" />
  </div>
</template>

<script>
import Signup from './components/Signup'
import Login from './components/Login'

export default {
  name: 'app',
  components: {
    Signup,
    Login
  },
  computed: {

  },
  methods: {
    signUp(newUser) {
      const { username, email, password } = newUser
      fetch('http://localhost:3000/auth/signup', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(username, email, password)
      })
    },
    login(user) {
      const { username, password } = user
      fetch('http://localhost:3000/auth/signup', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(username, password)
      })
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
