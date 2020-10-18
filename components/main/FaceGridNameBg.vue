<template>
  <div class="bg"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useComputed } from './face-grid-name-bg.fn'

export default defineComponent({
  setup(_, context) {
    const computed = useComputed(context)

    return {
      ...computed,
    }
  },
})
</script>

<style lang="scss" scoped>
.bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
