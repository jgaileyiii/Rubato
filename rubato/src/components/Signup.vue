<template>
    <div class='Signup'>
        <h2>Signup</h2>
        <form @submit.prevent="signUp">
            <input type='text' name='username' placeholder='username' required />
            <input type='email' name='email' placeholder='email' required/>
            <input type='password' name='password' placeholder='password' required />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    methods: {
        signUp() {
            const newUser = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            this.$emit('add-user', newUser)
        }
    }
}
</script>

<style scoped>

</style>