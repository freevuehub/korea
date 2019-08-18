<template>
  <v-app-bar
    color="primary"
    :shrink-on-scroll="!notMobile"
    :fade-img-on-scroll="!notMobile"
    :prominent="!notMobile"
    :src="currentImgUrl"
    lazy-src="/icons/icon-144x144.png"
    dense
    dark
    fixed
    app
  >
    <template v-slot:img="{ props }">
      <v-img
        v-if="!notMobile"
        ref="barImg"
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
      notMobile: Boolean
    }
  })
  export default class RouteHeader extends Vue {
    barHeight = 0;

    get currentImgUrl() {
      const { imgUrl }: any = this;

      return imgUrl ? imgUrl : '/icons/icon-144x144.png';
    };

    get batImgHeight() {
      const { notMobile, currentImgUrl }: any = this;

      if (notMobile) return '';

      const image = new Image();

      image.src = currentImgUrl;

      image.onload = () => {
        console.dir(image.naturalHeight);
        console.dir(image.naturalWidth);
      }
      
      return 500;
    }

    created() {
      const { notMobile, currentImgUrl }: any = this;
      const image = new Image();

      image.src = currentImgUrl;

      image.onload = () => {
        console.dir(image.naturalHeight);
        console.dir(image.naturalWidth);
      }
    };// v-toolbar__content
  }
</script>