<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <input type="text" name="username" placeholder="Username" required/>
            <input type="password" name="password" placeholder="Password" required/>
            <input type="submit" value="Login"/>
        </form>
    </div>
</template>

<script>

export default {
    name: "Login",
    methods: {
        login(event){
            const formData = new FormData(event.target)
            this.$store.dispatch("loginUser", {
                username: formData.get("username"),
                password: formData.get("password")
                })
            this.$router.push('/')
            }
        } 
    }

</script>

<style scoped>

</style>