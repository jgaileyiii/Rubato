<template>
    <div>
        <form @submit.prevent="login">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Login" class="button" />
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            username: ''
        }
    },
    methods: {
        login() {
            const user = {
                username: this.username,
                password: this.password
            }
            this.$emit('login', user)
        }
    }
    
}
</script>

<style scoped>

</style>