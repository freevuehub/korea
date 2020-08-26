<template>
  <div>
    <div v-for="(block, index) in achiveBlockList.list" :key="index" class="pa-2 achive-block">
      <p class="body-2">{{ block }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    achivement: String,
  },
  setup(props) {
    const achiveBlockList = reactive({
      list: computed(() => {
        return props.achivement.split('\n').filter((block) => !!block)
      }),
    })

    return {
      achiveBlockList,
    }
  },
})
</script>

<style lang="scss" scoped>
.achive-block {
  p {
    opacity: 0.8;
    line-height: 1.5rem;
    text-indent: 0.5rem;
    word-break: keep-all;
  }
}
</style>
