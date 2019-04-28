<template>
  <div class="card-body">
    <h2 class="card-title">Exercises</h2>
    <div class="card-text">Currently available exercises</div>
    <div>
      <table class="table table-light">
        <thead>
          <tr></tr>
          <tr>
            <th>Exercise Name</th>
            <th>Exercise Type</th>
            <th>Body Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exercises in exercises" :key="exercises.id">
            <th scope="col">{{exercises.exerciseName}}</th>
            <th scope="col">{{exercisetypes.exercisetype}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Globals } from "@/models/api";
import { getExercises } from "@/models/exercises";
import { getExerciseTypes } from "@/models/exerciseTypes";
import toastr from "toastr";

export default {
  data: () => ({
    Globals: Globals,
    exercises: [],
    exercisetypes: []
  }),
  async mounted() {
    this.exercises = await getExercises();
    this.exerciseTypes = await getExerciseTypes();
  }
};
</script>

<style>
</style>
