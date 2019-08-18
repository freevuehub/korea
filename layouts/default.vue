<template>
  <v-app :class="$style.app" id="app">
    <v-content v-scroll:#app="onScroll">
      <nuxt />
    </v-content>
    <SnackBar />
  </v-app>
</template>

<script lang="ts">
  import { SystemConst } from '~/Constant';
  import { SnackBar } from '~/containers';
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {
      SnackBar
    }
  })
  export default class DefaultLayout extends Vue {
    onScroll($e) {
      this.$store.dispatch(SystemConst.$Call.ScTop, $e.target.scrollTop);
    }
  }
</script>

<style module>
  .app {
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>

<style>
 a {
   text-decoration: none;
 }
 button {
   display: block;
   width: 100%;
   outline: 0;
   border: 0;
   text-align: left;
 }
</style>