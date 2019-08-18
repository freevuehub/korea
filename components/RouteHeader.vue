<template>
  <v-app-bar
    color="primary"
    shrink-on-scroll
    :src="imgUrl ? imgUrl : 'icons/icon-144x144.png'"
    lazy-src="icons/icon-144x144.png"
    dense
    dark
    fixed
    app
    prominent
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
      </v-img>
    </template>
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
  import { Vue, Component } from 'vue-property-decorator';
  
  @Component({
    props: {
      imgUrl: String,
    }
  })
  export default class RouteHeader extends Vue {
    mounted() {
      // console.dir(this.$refs.imgRef);
    };// v-toolbar__content
  }
</script>