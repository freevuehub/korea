<template>
  <v-container fluid>
    <v-card :class="$round">
      <v-card-text>
        <v-calendar ref="calendar" type="month" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  middleware: ['event'],
  setup() {
    return {}
  },
})
</script>
