<template>
  <div class="card-body">
    <h2 class="card-title">Foods</h2>
    <div class="card-text">Currently available foods</div>
    <div>
        <vSelect multiple label="foodName" :options="options" @search="searchFoods($event)" placeholder="Enter food name"></vSelect>
    </div>
    <div>
      <table class="table table-light table-hover">
        <thead class="thead-light">
          <tr>
            <th>Food Name</th>
            <th>Calories</th>
            <th>Carbohydrates</th>
            <th>Protein</th>
            <th>Fats</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="foods in foods" :key="foods.id">
            <th scope="col">{{foods.foodName}}</th>
            <th scope="col">{{foods.calories}}</th>
            <th scope="col">{{foods.carbohydrates}}</th>
            <th scope="col">{{foods.protein}}</th>
            <th scope="col">{{foods.fat}}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="https://unpkg.com/vue-select@latest"></script>

<script>
import vSelect from 'vue-select';
import { Globals } from "@/models/api";
import { getFoods } from "@/models/food";
import toastr from "toastr";

export default {
  components: {
    vSelect
  },

  data: () => ({
    Globals: Globals,
    foods: [],
    options:[]
  }),
  async mounted() {
    this.foods = await getFoods();
  },
  //Search Food
  async searchFood(input) {
    this.options = await food.searchFood(input);
  }
};
</script>

<style>
</style>