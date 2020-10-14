<template>
  <v-card class="d-flex" :class="$round" elevation="10" nuxt :to="`/person/${item.id}`">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ item.hunkuk }} / {{ item.work }}</div>
        <v-list-item-title class="headline mb-1">{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.birthDay }} ~ {{ item.deathDay }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey" :class="$round">
        <img :src="item.imgUrl || './noneImg.png'" :alt="item.name" />
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
})
</script>
