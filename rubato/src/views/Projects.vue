<template>
<div>
    <div class="row elem-border">
            <div class="col-md-3 col-sm-12 contact-title">
                <div class='projects-sidebar'>
                    <button v-on:click="toggleProjects" class="btn-style-main">
                        <h5>My Projects</h5>
                    </button>
                    <button v-on:click="toggleCreate" class="btn-style-main">
                        <h5>Create New Project</h5>
                    </button>
            </div>
        </div>
        <div v-show="createIsOpen" class="col-md-9 col-sm-12">
            <h4 class="create-project-title">Create New Project</h4>
                    <form  class="contact-form" @submit.prevent="addProject">
                        <div class="new-project-form">
                            <input class="form-control2" name="name" placeholder="Name"/>
                            <input class="form-control3" name="Tasks" placeholder="Description"/>
                            <button class="btn btn-primary" type='submit'>Create Project</button>
                        </div>
                    </form>
        </div>
        <div v-show="projectIsOpen" class="col-md-9 col-sm-12">
            <ul class="project-items">
                <div>
                    <li class="btn-style-main" v-on:click="toggleTasks(project)" v-for="project in projects" :key="project.id">
                        <ProjectCard :project="project" />
                    </li>
                </div>
            </ul> 
        </div>
        <div class="copyright2"></div>
        </div> 
            <div v-show="tasksOpen">
                <ul class="task-list">
                    <li v-for="task in renderedTasks" :key="task.id">
                        <ProjectTasks :task="task"/>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard"
import ProjectTasks from "@/components/ProjectTasksCard"

export default {
    components: {
        ProjectCard,
        ProjectTasks
    },
    data() {
       return { 
           createIsOpen: false,
           projectIsOpen: false,
           tasksOpen: false,
           tasks: [] 
        }
    },
    computed: {
        projects(){
            return this.$store.state.projectList
        },
        renderedTasks(){
            return this.tasks
        }
       
    },
    mounted: function () {
        this.$store.dispatch("getProjects")
        this.$store.dispatch("getProjectTasks")
    },     
    methods: {
        toggleCreate: function(){
            this.createIsOpen = !this.createIsOpen
        },
        toggleProjects: function(){
            this.projectIsOpen = !this.projectIsOpen
        },
        toggleTasks: function(project){
            this.tasksOpen = !this.tasksOpen
            const filteredTasks = this.$store.getters.getProjectTasksById(project)
            this.tasks = filteredTasks
        },
        addProject: function(event){
            const formData = new FormData(event.target)
            this.$store.dispatch("addProject", {
                name: formData.get("name")
            })

        }
    }
}
</script>
