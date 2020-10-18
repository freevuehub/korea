<template>
  <div class="block">
    <transition name="fade">
      <img v-show="state.load" :src="personFace[state.number]" alt="" @load="onImageLoad" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useState, useComputed, useImageLoad } from './fade-image-block.fn'

export default defineComponent({
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)
    const onImageLoad = useImageLoad(state, computed)

    return {
      state,
      ...computed,
      onImageLoad,
    }
  },
})
</script>

<style lang="scss" scoped>
.block {
  width: 5vw;
  height: 5vw;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
}

.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
