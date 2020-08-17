<template>
  <v-app-bar color="primary" dense dark app fixes>
    <v-btn v-if="$route.params.id" icon @click.prevent="$router.go(-1)">
      <v-icon>arrow_back_ios</v-icon>
    </v-btn>
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
