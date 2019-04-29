<template>
  <div class="card-body">
    <h2 class="card-title">Add Food</h2>
    <div class="card-text">
      <form @submit.prevent="submit">
        <div class="form-row">
          <!-- Food Name -->
          <div class="form-group col-md-6">
            <label for="foodName">Food Name</label>
            <input
              type="text"
              class="form-control"
              v-model="data.foodName"
              name="foodName"
              id="foodName"
              aria-describedby="helpfoodName"
              placeholder="Food Name"
              required
            >
          </div>
          <!-- Calories -->
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="Calories">Calories</label>
              <input
                type="text"
                class="form-control"
                v-model="data.calories"
                name="calories"
                id="calories"
                aria-describedby="helpCalories"
                placeholder="Calories"
              >
            </div>
            <!-- Carbs -->
            <div class="form-group col-md-2">
              <label for="Carbohydrates">Carbohydrates</label>
              <input
                type="text"
                class="form-control"
                v-model="data.carbohydrates"
                name="carbohydrates"
                id="weighcarbohydrates"
                aria-describedby="helpCarbohydrates"
                placeholder="Carbs"
              >
            </div>
            <!-- Protein -->
            <div class="form-group col-md-2">
              <label for="Protein">Protein</label>
              <input
                type="text"
                class="form-control"
                v-model="data.protein"
                name="protein"
                id="protein"
                aria-describedby="helpProtein"
                placeholder="Protein"
              >
            </div>
            <!-- Fat -->
            <div class="form-group-col-nd-2 col">
              <label for="Fat">Fat</label>
              <input
                type="text"
                class="form-control"
                v-model="data.fat"
                name="fat"
                id="fat"
                aria-describedby="helpFat"
                placeholder="Fat"
              >
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Globals } from "@/models/api";
import { addFood } from "@/models/food";
import toastr from "toastr";

export default {};
</script>

<style>
</style>