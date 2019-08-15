<template>
  <v-app>
    <v-content>
      <nuxt />
    </v-content>
    <SnackBar />
  </v-app>
</template>

<script lang="ts">
  import { SnackBar } from '~/containers';
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {
      SnackBar
    }
  })
  export default class DefaultLayout extends Vue {}
</script>

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