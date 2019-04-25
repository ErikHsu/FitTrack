<template>
    <div class="card bg-light">
        <div class="card-body">
            <h2 class="card-title">Edit Profile</h2>
            <div class="card-text">
                <p class="text-primary">Edit your profile here</p>
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
                            >
                        </div>
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
                            >
                        </div>
                    </div>
                    <div class="form-row">
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
                            >
                        </div>
                        <!-- Gender -->
                        <div class="form-group col-md-2">
                            <label for="Gender">Gender</label>

                            <select class="custom-select" v-model="data.gender">
                                <option hidden>Choose your gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

        <div class="card border-success" v-if="newUser">
            <div class="card-body">
                <h4 class="card-title">Congrats! You've Registered</h4>
                <p class="card-text">{{newUser.FirstName}} {{newUser.LastName}}</p>
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
        }
    },
    async mounted() {
        this.userCheck();
    }
};
</script>

<style>
</style>