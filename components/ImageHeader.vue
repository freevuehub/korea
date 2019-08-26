<template>
  <header
    :class="[$style.imgHeader, 'primary', 'v-app-bar', 'v-app-bar--fixed']"
    color="primary"
  >
    
    <div>
      <slot></slot>
    </div>
    <img :src="img" alt="">
  </header>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    props: {
      img: String
    }
  })
  export default class ImageHeader extends Vue {
    mounted() {
      console.log(this);
    }
  }
</script>

<style module>
  .imgHeader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 56px;
  }
</style>