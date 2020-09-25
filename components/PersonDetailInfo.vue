<template>
  <v-card class="mb-5" :class="$round" elevation="10">
    <v-card-title>기본 정보</v-card-title>
    <v-card-text>
      <row class="mb-3" title="성함">{{ item.name }}</row>
      <row class="mb-3" title="생년월일">{{ item.birthDay }}</row>
      <row class="mb-3" title="사망년월일">{{ item.deathDay }}</row>
      <row class="mb-3" title="본적">{{ item.registerLarge || '미상' }}</row>
      <row title="주소">{{ item.registerMid || '미상' }}</row>
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
