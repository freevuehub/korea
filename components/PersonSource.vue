<template>
  <v-card>
    <v-card-text>
      <row class="mb-3" title="이미지 출처" @click="onSourceClick(item.imgSource.url)">
        <span>{{ item.imgSource.name }}</span>
      </row>
      <row title="공훈록 출처" @click="onSourceClick(item.imgSource.url)">
        <span>{{ item.achivementSource.name }}</span>
      </row>
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
  setup() {
    const onSourceClick = (url: string) => {
      window.open(url, '_blank')
    }

    return { onSourceClick }
  },
})
</script>
