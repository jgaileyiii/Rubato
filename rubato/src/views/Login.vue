<template>
        <div class="col-lg-10 col-md-12 order-1 order-lg-2 order-md-1">
            <div class="row">
                <div class="col-md-3 col-sm-12 contact-title">
                    <h5 class="login-header">Welcome</h5>
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="login-form">
                        <form class="contact-form" @submit.prevent="login">
                            <div class="form-group">
                                <input class="form-control" type="text" name="username" placeholder="Username" required/>
                                <input class="form-control" type="password" name="password" placeholder="Password" required/>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
