<template>
    <div class="card-body">
      <h2 class="card-title">Exercises</h2>
      <div class="card-text">
        <p class="text-primary">Add a new exercise here</p>
        <form @submit.prevent="submit">
          <div class="form-group">
            <!--ExerciseName-->
            <label for="ExerciseName">Exercise Name</label>
            <input
              type="text"
              class="form-control"
              v-model="data.exerciseName"
              name="exercisename"
              id="exercisename"
              aria-describedby="helpexercisename"
              placeholder="Exercise Name"
            >
            <small
              id="helpexercisename"
              class="form-text.text-muted"
            >Please enter the exercise name here</small>
          </div>
          <!--ExerciseType Select-->
          <div class="form-group">
            <label for="ExerciseType">Exercise Type</label>
            <select class="form-control" id="exerciseType" v-model="data.exerciseType">
              <option>Weight Training</option>
              <option>Cardio</option>
              <option>HIIT</option>
              <option>Active Recovery</option>
              <option>Other</option>
            </select>
            <small
              id="helpexercisename"
              class="form-text.text-muted"
            >Please select the type of exercise it is</small>
          </div>
          <!--Body Focus Select-->
          <div class="form-group">
            <label for="BodyFocus">Body Focus</label>
            <select class="form-control" id="bodyFocus" v-model="data.bodyFocus">
              <option>Chest</option>
              <option>Back</option>
              <option>Core</option>
              <option>Arms</option>
              <option>Total Body</option>
              <option>Other</option>
            </select>
            <small
              id="helpexercisename"
              class="form-text.text-muted"
            >Please select the area of focus for this exercise</small>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
</template>

<script>
import { Globals } from "@/models/api";
import { addExercise } from "@/models/exercises";
import { addExerciseType } from "@/models/exerciseTypes";
import toastr from "toastr";

export default {
  data: () => ({
    data: {},
    newExercise: null
  }),
  methods: {
    async submit() {
      try {
        const m = await addExercise(data);
        await addExerciseType(data);
        this.newExercise = m;
        toastr.success("Exercise Added");
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

