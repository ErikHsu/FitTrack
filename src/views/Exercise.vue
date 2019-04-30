<template>
  <div class="card-body">
    <h2 class="card-title">Exercises</h2>
    <div class="card-text">Currently available exercises</div>
    <div>
      <table class="table table-light table-hover">
        <thead class="thead-light">
          <tr>
            <th>Exercise Name</th>
            <th>Exercise Type</th>
            <th>Body Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exercises in exercises" :key="exercises.exerciseName">
            <th scope="col">{{exercises.exerciseName}}</th>
            <th scope="col">{{exercises.exerciseType}}</th>
            <th scope="col">{{exercises.bodyType}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Globals } from "@/models/api";
import { getAllExerciseInfo } from "@/models/exercises";
import { getExercises } from "@/models/exercises";
import toastr from "toastr";

export default {
  data: () => ({
    Globals: Globals,
    exercises: []
  }),
  async mounted() {
    this.exercises = await getExercises();
  }
};
</script>

<style>
</style>
