<template>
    <div class="card-body">
      <h2 class="card-title">Login</h2>
      <div class="card-text">
        <p class="text-primary">Please sign in</p>
        <form @submit.prevent="submit">
          <div class="form-group">
            <label for="UserName">Username</label>
            <input
              type="text"
              class="form-control"
              v-model="data.userName"
              name="username"
              id="username"
              aria-describedby="helpUserName"
              placeholder="username"
            >
            <small id="helpUserName" class="form-text.text-muted">Please enter your username here</small>
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input
              type="text"
              class="form-control"
              v-model="data.password"
              name="password"
              id="password"
              aria-describedby="helpPassword"
              placeholder="password"
            >
            <small id="helpPassword" class="form-text.text-muted">Please enter your password here</small>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
</template>


<script>
import { Globals } from "@/models/api";
import { Login } from "@/models/users";
import toastr from "toastr";

export default {
  data: () => ({
    data: {},
    newUser: null
  }),
  methods: {
    async submit() {
      try {
        const m = await Login(this.data);
        Globals.user = m.user;
        Globals.token = m.token;
        toastr.success("You've logged in successfully!");
      } catch (error) {
        Globals.errors.push(error);
        toastr.error(error.msg);
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Numans");

html,
body {
  background-image: url("http://getwallpapers.com/wallpaper/full/a/c/c/804742-free-climbing-wallpapers-2560x1600-picture.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}

.card-body {
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.6); /* Black background with 0.5 opacity */
  color: #f1f1f1;

  height: 400px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
}

.text-muted {
  color: white;
}
</style>

