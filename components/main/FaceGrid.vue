<template>
  <div class="d-flex flex-wrap">
    <FaceGridNameBg />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { FadeImageBlock, FaceGridNameBg } from '../'

export default defineComponent({
  components: {
    FadeImageBlock,
    FaceGridNameBg,
  },
})
</script>

<style lang="scss" scoped>
.flex-wrap {
  position: relative;
  overflow: hidden;
  height: 80vh;
}
</style>
