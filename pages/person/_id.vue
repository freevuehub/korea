<template>
  <v-container>
    <v-row class="justify-center">
      <v-col xs="12" sm="12" md="10" lg="8">
        <v-tabs
          v-model="state.tab"
          class="mb-5"
          left
          background-color="transparent"
          color="primary"
        >
          <v-tab :value="0" :ripple="false">유공자 정보</v-tab>
          <v-tab :value="1" :ripple="false">공훈록</v-tab>
          <v-tab :value="2" :ripple="false">출처</v-tab>
        </v-tabs>

        <v-tabs-items v-model="state.tab" class="tab-item-area">
          <v-tab-item
            :value="0"
            eager
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row>
              <v-col xs="12" sm="12" md="6">
                <v-card class="mb-3" :class="$round" elevation="10">
                  <v-img class="align-end" :src="computed.detail.imgUrl || '/icon.png'" />
                </v-card>
              </v-col>
              <v-col xs="12" sm="12" md="6">
                <info :item="computed.detail" />
                <price :item="computed.detail" />
              </v-col>
            </v-row>
          </v-tab-item>

          <v-tab-item
            :value="1"
            eager
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-card class="mb-3" :class="$round" elevation="10">
              <achivement :achivement="computed.detail.achivement" />
            </v-card>
          </v-tab-item>

          <v-tab-item
            :value="2"
            eager
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-card class="mb-3" :class="$round" elevation="10">
              <source-info :item="computed.source" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api'
import { useState, useComputed, useDetailWatch } from './_id.fn'
import {
  CardTextRow,
  PersonDetailInfo,
  PersonPriceInfo,
  PersonSource,
  DetailAchivement,
} from '~/components'

export default defineComponent({
  middleware: ['person-id'],
  components: {
    row: CardTextRow,
    info: PersonDetailInfo,
    price: PersonPriceInfo,
    sourceInfo: PersonSource,
    achivement: DetailAchivement,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    watch(() => computed.detail, useDetailWatch(context, computed))

    return {
      state,
      computed,
    }
  },
})
</script>

<style lang="scss">
.theme--dark.v-tabs-items.tab-item-area {
  background-color: transparent;
}
</style>
