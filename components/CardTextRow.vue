<template>
  <div class="d-flex align-center">
    <span class="body-1 font-weight-light">{{ title }}</span>
    <v-spacer></v-spacer>
    <button v-if="state.isClick" class="pa-0" @click.prevent="$emit('click')">
      <strong class="body-1 font-weight-bold">
        <slot></slot>
      </strong>
    </button>
    <strong v-else class="body-1 font-weight-bold">
      <slot></slot>
    </strong>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: String,
  },
  setup(_: {}, { listeners }: SetupContext) {
    const state = reactive({
      isClick: computed(() => {
        return !!listeners.click
      }),
    })

    return {
      state,
    }
  },
})
</script>
