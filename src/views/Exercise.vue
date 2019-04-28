<template>
  <div class="card-body">
    <h2 class="card-title">Exercises</h2>
    <div class="card-text">Currently available exercises</div>
    <div>
      <table class="table table-light">
        <thead>
          <tr></tr>
          <tr>
            <th scope="col">Exercise Name</th>
            <th scope="col">Exercise Type</th>
            <th scope="col">Body Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="exercise in exercises" :key="exercise.id">
            <th scope="row">{{exercises.exerciseName}}</th>
          </tr>
          <tr v-for="exercisetypes in exercisetypes" :key="exercisetypes.id">
            <th scope="row">{{exercisetypes.exerciseType}}</th>
            <th scope="row">{{exercisetypes.bodyFocus}}</th>
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
    exercises: {},
    exercisetypes: {}
  }),
  async mounted() {
    this.exercises = await getExercises();
    this.exerciseTypes = await getExerciseTypes();
  }
};
</script>

<style>
</style>
