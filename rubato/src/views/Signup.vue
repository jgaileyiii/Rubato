<template>
    <div class="col-lg-10 col-md-12 order-1 order-lg-2 order-md-1">
        <div class="row">
            <div class="col-md-3 col-sm-12 contact-title">
                <h5 class="login-header">Signup</h5>
            </div>
            <div class="col-md-9 col-sm-12">
                <div class="login-form">
                    <form class="contact-form" @submit.prevent="signUp">
                        <div class="signup-form">
                            <input class="form-control" type='text' name='username' placeholder='Username' required />
                            <input class="form-control" type='email' name='email' placeholder='Email' required/>
                            <input class="form-control" type='password' name='password' placeholder='Password' required />
                        </div>
                        <div class="signup-button">
                            <button class="btn btn-primary" type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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

