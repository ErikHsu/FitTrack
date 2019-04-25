<template>
    <div class="card bg-light">
        <div class="card-body">
            <h2 class="card-title">{{Globals.user.userName}}'s Profile</h2>
            <div class="card-text">
                <div class="card-body">
                    First Name: {{profiles.fName}}
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { Globals } from '@/models/api';
import { getProfile } from '@/models/peoples';
import toastr from 'toastr';

export default {
    data: () => ({
        Globals: Globals,
        profiles: []
    }),
    async mounted() {
        let data = Globals.user;
        this.profiles = await getProfile(data);
    }
};
</script>

<style>
</style>
