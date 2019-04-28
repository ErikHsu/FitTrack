<template>
    <div class="card-body">
      <h2 class="card-title">{{Globals.user.userName}}'s Profile</h2>
      <div class="card-text">
          <div class="row">
            <div class="col col-lg-2">First Name:</div>
            <div class="col-md-auto">
              <div
                class="control-label"
                v-for="profiles in profiles"
                :key="profiles.id"
              >{{profiles.fName}}</div>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-2">Last Name:</div>
            <div class="col-md-auto">
              <div
                class="card-text"
                v-for="profiles in profiles"
                :key="profiles.id"
              >{{profiles.lName}}</div>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-2">Birthday:</div>
            <div class="col-md-auto">
              <div
                class="card-text"
                v-for="profiles in profiles"
                :key="profiles.id"
              >{{profiles.birthday}}</div>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-2">Weight:</div>
            <div class="col-md-auto">
              <div
                class="card-text"
                v-for="bodyHist in bodyHist"
                :key="bodyHist.id"
              >{{bodyHist.weight}} lbs.</div>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-2">Height:</div>
            <div class="col-md-auto">
              <div
                class="card-text"
                v-for="bodyHist in bodyHist"
                :key="bodyHist.id"
              >{{bodyHist.height}} in</div>
            </div>
          </div>
          <div class="row">
            <div class="col col-lg-2">Gender:</div>
            <div class="col-md-auto">
              <div
                class="card-text"
                v-for="bodyHist in bodyHist"
                :key="bodyHist.id"
              >{{bodyHist.gender}}</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { Globals } from "@/models/api";
import { getProfile } from "@/models/peoples";
import { getBodyHistory } from "@/models/body_histories";
import toastr from "toastr";

export default {
  data: () => ({
    Globals: Globals,
    profiles: {},
    bodyHist: {}
  }),
  async mounted() {
    let data = Globals.user.userName;
    this.profiles = await getProfile({ userName: data });
    this.bodyHist = await getBodyHistory({ userName: data });
  }
};
</script>

<style>
</style>
