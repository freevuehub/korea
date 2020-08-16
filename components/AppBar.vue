<template>
  <v-app-bar color="primary" dense dark app fixes>
    <v-app-bar-nav-icon @click.stop="$emit('change', !drawer)" />
    <v-spacer />
    <v-toolbar-title v-text="state.title" />
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api'

export default defineComponent({
  model: {
    prop: 'drawer',
    event: 'change',
  },
  props: {
    drawer: Boolean,
  },
  setup() {
    const state = reactive({
      title: computed(() => {
        return '당신을 기억하겠습니다.'
      }),
    })

    return {
      state,
    }
  },
})
</script>
