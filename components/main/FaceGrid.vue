<template>
  <div class="d-flex flex-wrap">
    <face-grid-name-bg />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { FaceGridNameBg } from './'

export default defineComponent({
  name: 'FaceGrid',
  components: {
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
