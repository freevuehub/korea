<template>
  <header>
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