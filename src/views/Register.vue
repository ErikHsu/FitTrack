<template>
<div class="card">
  <div class="card-body">
    <h2 class="card-title">Register</h2>
    <div class="card-text">
      <p class="text-primary">Get started with your free account</p>
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
          <small id="helpUserName" class="form-text text-muted">Please enter your username here</small>
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
          <small id="helpPassword" class="form-text text-muted">Please enter your password here</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { Register } from "@/models/users";
import toastr from "toastr";

export default {
  data: () => ({
    data: {},
    newUser: null
  }),
  methods: {
    async submit() {
      try {
        const m = await Register(this.data);
        this.newUser = m;
        toastr.success("You've registered successfully!");
      } catch (error) {
        Globals.errors.push(error);
        toastr.error(error.msg);
      }
    }
  }
};
</script>

<style>
</style>

