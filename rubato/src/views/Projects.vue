<template>
<div>
    <div class="row elem-border">
            <div class="col-md-3 col-sm-12 contact-title">
                <div class='projects-sidebar'>
                    <button class="btn-style-main">
                        <h5>My Projects</h5>
                    </button>
                    <button v-on:click="toggle" class="btn-style-main">
                        <h5>Create New Project</h5>
                    </button>
            </div>
        </div>
        <div v-show="isOpen" class="col-md-9 col-sm-12">
            <h4 class="create-project-title">Create New Project</h4>
                    <form  class="contact-form" @submit.prevent="addProject">
                        <div class="new-project-form">
                            <input class="form-control2" name="name" placeholder="Name"/>
                            <input class="form-control3" name="description" placeholder="Description"/>
                            <button class="btn btn-primary" type='submit'>Create Project</button>
                        </div>
                    </form>
        </div>
        <div class="col-md-9 col-sm-12">
            <ul class="project-items">
                <div>
                    <li  class="btn-style-main" v-for="project in projects" :key="project.id">
                        <ProjectCard :project="project" />
                    </li>
                </div>
            </ul> 
        </div>
        </div> 
            <p class="copyright2"></p>
        </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"

export default {
    components: {
        ProjectCard
    },
    data() {
       return { isOpen: false }
    },
    computed: {
        projects(){
            return this.$store.state.projectList
        }
    },
    mounted(){
        this.$store.dispatch('getProjects')
    },     
    methods: {
        toggle: function(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>
