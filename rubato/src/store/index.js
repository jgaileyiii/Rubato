import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username : null,
    userID: null,
    projectList: [],
    projectTasks: []
  },
  getters: {
    username: state => state.username
  },
  mutations: {
    setUser(state, user){
      state.username = user.username
      state.userID = user.userID
    },
    removeUser(state){
      state.username = null
      state.userID = null
    },
    addProject(state, project){
      state.projectList = [project, ...state.projectList]
    },
    addProjectTask(state, task){
      state.projectTasks = [task, ...state.projectTasks]
    },
    setProjects(state, projects){
      state.projectList = projects
    }
  },
  actions: {
     loginUser({ commit }, user) {
      fetch('http://localhost:3000/auth/login', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(user)
          }).then(response => response.json())
            .then(user => localStorage.user_id = user.userID)
            && commit("setUser", user)
        },
        logout({ commit }){
          commit('removeUser')
        },
        getProjects({ commit }){
          fetch("./projects.json")
            .then(response => response.json())
            .then(response => {
              commit("setProjects", response.projects)
              console.log(response.projects)
            })
        }
      },
  modules: {
  }
})
