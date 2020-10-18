<template>
  <div class="d-flex flex-wrap">
    <FadeImageBlock v-for="url in 100" :key="url" />
    <div class="bg"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { FadeImageBlock } from '../'

export default defineComponent({
  components: {
    FadeImageBlock,
  },
})
</script>

<style lang="scss" scoped>
.flex-wrap {
  position: relative;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
