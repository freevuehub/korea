<template>
  <v-app-bar
    color="primary"
    :shrink-on-scroll="!notMobile"
    :fade-img-on-scroll="!notMobile"
    :prominent="!notMobile"
    :src="currentImgUrl"
    scroll-target="#app"
    lazy-src="/icons/icon-144x144.png"
    dense
    dark
    fixed
    app
  >
    <template v-slot:img="{ props }">
      <v-img
        v-if="!notMobile"
        v-bind="props"
        position="left center"
        gradient="to left, rgba(19,84,122,.6), rgba(128,208,199,.7)"
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
  import { mapGetters } from 'vuex';
  import { SystemConst } from '~/Constant';
  import { Vue, Component, Watch } from 'vue-property-decorator';
  
  @Component({
    props: {
      imgUrl: String,
      notMobile: Boolean
    },
    computed: {
      ...mapGetters({
        scTop: SystemConst.$Get.ScTop
      })
    }
  })
  export default class RouteHeader extends Vue {
    barHeight: number = 0;
    natureImgWidth: number = 0;
    natureImgHeight: number = 0;

    get innerWidth(): number {
      const { $vuetify }: any = this;
      
      return $vuetify.breakpoint.width;
    };

    get currentImgUrl(): string {
      const { imgUrl }: any = this;

      return imgUrl ? imgUrl : '/icons/icon-144x144.png';
    };

    @Watch('innerWidth')
    onInnerWidthChanged(val: number, oldVal: string) {
      this.barHeight = (this.natureImgHeight * val) / this.natureImgWidth;
    }
    @Watch('scTop')
    onScTopChanged(val: number, oldVal: string) {
      const { offsetHeight }: any = document.querySelector('.v-toolbar__content');

      this.barHeight = Number(offsetHeight);
    }

    _LoadImage(): void {
      const { notMobile, currentImgUrl }: any = this;
      const image = new Image();

      image.src = currentImgUrl;

      image.onload = () => {
        this.natureImgWidth =  Number(image.naturalWidth);
        this.natureImgHeight = Number(image.naturalHeight);

        this.barHeight = (this.natureImgHeight * this.innerWidth) / this.natureImgWidth;
      } 
    };

    mounted() {
      this._LoadImage();
    };
  }
</script>