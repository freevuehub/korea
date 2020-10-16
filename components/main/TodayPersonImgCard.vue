<template>
  <v-card :class="$round" elevation="10">
    <v-img class="align-end" :src="url || '/icon.png'" min-height="200px" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: {
      type: String,
      default: '',
    },
  },
})
</script>
