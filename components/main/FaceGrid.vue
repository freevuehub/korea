<template>
  <div class="d-flex flex-wrap">
    <name-bg />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { FaceGridNameBg } from '@/components'

export default defineComponent({
  components: {
    // FadeImageBlock,
    nameBg: FaceGridNameBg,
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
