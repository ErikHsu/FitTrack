<template>
  <div class="card bg-light">
    <div class="card-body">
      <h2 class="card-title">Plans</h2>
      <div class="card-text">
        <p class="text-primary">Create a new plan here</p>
        <form @submit.prevent="submit">
          <div class="form-group">
            <!--Plan Name-->
            <label for="PlanName">Plan Name</label>
            <input
              type="text"
              class="form-control"
              v-model="data.planName"
              name="planname"
              id="planname"
              aria-describedby="helpplanname"
              placeholder="Plan Name"
            >
            <small id="helpplanname" class="form-text text-muted">Please enter the plan name here</small>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <router-link :to="{name: 'assignExercise'}">
            <button type="continue" class="btn btn-primary float-right">Continue to add exercises</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Globals } from "@/models/api";
import { addWorkoutPlan } from "@/models/workout_plans";
import toastr from "toastr";

export default {
  data: () => ({
	Globals: Globals,
    data: {},
	newPlan: null
  }),
  methods: {
    async submit() {
      try {
		const m = await addWorkoutPlan(data);
		this.newPlan = m;
		await linkToUser(data);
        toastr.success("Exercise Plan Added");
      } catch (error) {
        Globals.errors.push(error);
        toastr.error(error.msg);
      }
    }
  }
}
</script>

<style>
</style>
