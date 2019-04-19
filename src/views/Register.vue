<template>
    <div class="card text-white bg-light">
        <article class="card-body mx-auto" style="max-width: 400px;">
            <font color="black">
                <h2 class="card-title mt-3 text-center">Create Account</h2>
            </font>
            <p class="text-center text-primary">Get started with your free account</p>
            <p class="divider-text">
                <span class="bg-light"></span>
            </p>
            <div class="card-text">
                <form @submit.prevent="submit">
                    <div class="form-group input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="username">Username</i>
                            </span>
                        </div>
                        <input
                            userName
                            class="form-control"
                            placeholder="Desired username"
                            type="text"
                        >
                    </div>
                </form>
            </div>
        </article>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
