<template>
    <div id='Signup'>
        <h2>Signup</h2>
        <form @submit.prevent="signUp">
            <input type='text' name='username' placeholder='username' required />
            <input type='email' name='email' placeholder='email' required/>
            <input type='password' name='password' placeholder='password' required />
            <input type='submit' name="submit" value="Sign Up"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    methods: {
       signUp(event){
        const formData = new FormData(event.target)
        const user = {
                username: formData.get("username"),
                email: formData.get("email"),
                password: formData.get("password")
            }
        fetch('http://localhost:3000/auth/signup', {
            method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
             },
            body: JSON.stringify(user)    
            })
            this.$router.push('/login')
        }
    }
}

</script>

<style scoped>

</style>