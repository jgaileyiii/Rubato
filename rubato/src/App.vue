<template>
  <div id="app">
    <body class="brutal-landing">
      <div class="row elem-border">
        <div class="banner-container">
          <router-link class="col-sm-8 anchor brand" :to="{name: 'Home'}">
            <div class="title">
              <h1 class="stretch-it">Rubato</h1>
            </div>
          </router-link>
        </div>
        <nav class="">
          <ul class="nav-items">
            <div>
              <li class="btn-style-main">
                <router-link :to="{name: 'Home'}">Home</router-link>
              </li>
            </div>
             <div>
              <li class="btn-style-main">
                <router-link :to="{name: 'About'}">About</router-link>
              </li>
            </div>
            <div>
              <li class="btn-style-main">
                <router-link :to="{name: 'Signup'}">Signup</router-link>
              </li>
            </div>
          </ul>
        </nav>
              <div class="user-info">
                  <li class="btn-style-main">
                    <router-link v-show="!user" :to="{name: 'Login'}">Login</router-link>
                  </li>
                  <p class="username" v-if="user != null" :key="user.id">{{ user }}</p>
                  <button class="btn btn-dark" v-show="user" v-on:click.prevent="logout">Logout</button>
              </div>
        </div>
        <main class="container-fluid">
            <div v-show="user" class="row elem-border">
              <div class="projects-header">
                <div class="btn-style-main">
                  <router-link class="" :to="{name: 'Projects'}"><h4>Projects</h4></router-link>
                </div>
              </div>
            </div>
            <router-view></router-view>
        </main>
      </body>
                

  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    user() {
          return (this.$store.state.username)
        },
    projects() {
      return (this.$store.state.projects)
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
      },
      isOpen(){
        return null
      }  
  }
}
</script>