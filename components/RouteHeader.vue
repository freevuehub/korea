<template>
  <v-app-bar
    color="primary"
    dense
    dark
    fixed
    app
  >
    <v-toolbar-title>
      <slot></slot>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';

  @Component({
    props: {
      imgUrl: String,
    }
  })
  export default class RouteHeader extends Vue {}
</script>
