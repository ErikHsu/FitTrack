<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
    <router-link class="navbar-brand" to="/">
      <img alt="HeartBeat" src="../assets/heartbeat.png" height="30">
    </router-link>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="Register" active-class="active">Registration</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="Login" active-class="active">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="Profile" active-class="active">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="EditProfile" active-class="active">Edit Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="Exercises" active-class="active">Exercises</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="AddExercise" active-class="active">Add Exercise</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="AddPlan" active-class="active">Add Plan</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { login, Globals } from "@/models/api";

export default {
  data: () => ({
    Globals: Globals
  }),
  methods: {
    login() {
      login();
    }
  }
};
</script>

<style>
.navbar {
  opacity: 0.9;
}
</style>