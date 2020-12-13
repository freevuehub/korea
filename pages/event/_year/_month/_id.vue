<template>
  <v-row class="mt-5">
    <v-col>
      <v-card :class="$round">
        <v-card-title>{{ detail.name }}</v-card-title>
        <v-card-text>
          <md-render :markdown="detail.contents" />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col xs="12" sm="4">
      <v-card :class="$round">
        <v-img :src="detail.imgUrl" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { HistoryConst } from '~/Constant'
import { MarkdownRender } from '~/components'

export default defineComponent({
  middleware: ['event-id'],
  components: {
    mdRender: MarkdownRender,
  },
  setup(_, context) {
    const _computed = {
      detail: computed(() => {
        return context.root.$store.getters[`history/${HistoryConst.$Get.Item}`]
      }),
    }

    return {
      ..._computed,
    }
  },
})
</script>
