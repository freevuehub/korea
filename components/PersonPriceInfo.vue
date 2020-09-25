<template>
  <v-card :class="$round" elevation="10">
    <v-card-title>포상 정보</v-card-title>
    <v-card-text>
      <row class="mb-3" title="훈격">{{ item.hunkuk }}</row>
      <row class="mb-3" title="운동계열">{{ item.work }}</row>
      <row title="포상년도">{{ item.judgeYear }}</row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { CardTextRow } from './'

export default defineComponent({
  components: {
    row: CardTextRow,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>
