<!-- Combination page for Peoples and Body_History, updates both tables at once upon submit -->

<template>
    <div class="card-body">
      <h2 class="card-title">Edit Profile</h2>
      <div class="card-text">
        <p class="text-primary">All fields must be complete</p>
        <form @submit.prevent="submit">
          <div class="form-row">
            <!-- First Name -->
            <div class="form-group col-md-6">
              <label for="fName">First Name</label>
              <input
                type="text"
                class="form-control"
                v-model="data.fName"
                name="fName"
                id="fName"
                aria-describedby="helpfName"
                placeholder="First Name"
                required
              >
            </div>
            <!-- Last Name -->
            <div class="form-group col-md-6">
              <label for="lName">Last Name</label>
              <input
                type="text"
                class="form-control"
                v-model="data.lName"
                name="lName"
                id="lName"
                aria-describedby="helplName"
                placeholder="Last Name"
                required
              >
            </div>
          </div>
          <!-- Birthday -->
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="Birthday">Birthday</label>
              <input
                type="text"
                class="form-control"
                v-model="data.birthday"
                name="birthday"
                id="birthday"
                aria-describedby="helpBirthday"
                placeholder="YYYY-MM-DD"
                
              >
            </div>
            <!-- Weight -->
            <div class="form-group col-md-2">
              <label for="Weight">Weight</label>
              <input
                type="text"
                class="form-control"
                v-model="data.weight"
                name="weight"
                id="weight"
                aria-describedby="helpWeight"
                placeholder="Weight (lbs)"
                required
              >
            </div>
            <!-- Height -->
            <div class="form-group col-md-2">
              <label for="Height">Height</label>
              <input
                type="text"
                class="form-control"
                v-model="data.height"
                name="height"
                id="height"
                aria-describedby="helpHeight"
                placeholder="Height"
                required
              >
            </div>
            <!-- Gender -->
            <div class="form-group col-md-2">
              <label for="Gender">Gender</label>
              <select class="custom-select" v-model="data.gender" required>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          <!-- UserName -->
            <div class="form-group-col-nd-2 col">
              <label for="userName">User Name</label>
              <input
                type="text"
                class="form-control"
                v-model="data.userName"
                name="userName"
                id="userName"
                aria-describedby="helpUserName"
                placeholder="User Name"
                required
              >
              <small
                id="helpUserName"
                class="form-text.text-muted"
              >Please confirm your user name here</small>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>
import { Globals } from "@/models/api";
import { editProfile } from "@/models/peoples";
import { editBody } from "@/models/body_histories";
import toastr from "toastr";

export default {
  data: () => ({
    data: {},
    newUser: null
  }),
  methods: {
    async submit() {
      try {
        await editProfile(this.data);
        await editBody(this.data);
        toastr.success("Profile Updated");
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