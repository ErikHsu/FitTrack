<template>
    <div>
        <Nav/>
        <div class="container" id="main">
            <div class="alert alert-danger" role="alert" v-for="(e, i) in Globals.errors" :key="i">
                <button
                    type="button"
                    class="close"
                    aria-label="Close"
                    @click="Globals.deleteError(i)"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>{{e.msg}}</strong>
            </div>
            <transition name="moveInUp">
            <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav';
import { Globals } from '@/models/api';
export default {
    data: () => ({
        Globals: Globals
    }),

    components: {
        Nav
    }
}
</script>

<style lang="scss">
.moveInUp-enter-active{
    opacity: 0;
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

</style>
