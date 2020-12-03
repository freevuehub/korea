<template>
  <v-container fluid>
    <v-row class="align-center flex-column pa-0">
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0 mb-5">
        <v-row ref="today-person" class="align-start person-info py-0">
          <v-col xs="12" sm="6" class="thumb" :class="{ pc: !isMobile }">
            <person-image :url="todayPerson.imgUrl" />
          </v-col>
          <v-col xs="12" sm="6" class="information">
            <person-info :item="todayPerson" />
            <v-card v-if="!isMobile" :class="$round" elevation="10">
              <achivement :achivement="todayPerson.achivement" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="10" md="10" lg="8" class="py-0">
        <v-row ref="today-person" class="align-start person-info py-0">
          <v-col xs="12" sm="6" class="thumb" :class="{ pc: !isMobile }">
            <person-image :url="todayHistoryEvent.imgUrl" />
          </v-col>
          <v-col xs="12" sm="6" class="information">
            <v-card :class="[$round, 'mb-5']" elevation="10">
              <v-card-title>{{ todayHistoryEvent.name }}</v-card-title>
            </v-card>
            <v-card v-if="!isMobile" :class="$round" elevation="10">
              <v-card-text>
                <md-render :markdown="todayHistoryEvent.contents" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api'
import { useState, useComputed, useIsMobileWatch } from './index.fn'
import {
  TodayPersonImgCard,
  TodayPersonInfoCard,
  DetailAchivement,
  PersonListCardItem,
  MarkdownRender,
} from '~/components'

export default defineComponent({
  middleware: ['main'],
  layout: 'main',
  components: {
    personImage: TodayPersonImgCard,
    personInfo: TodayPersonInfoCard,
    achivement: DetailAchivement,
    person: PersonListCardItem,
    mdRender: MarkdownRender,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    watch(() => computed.isMobile.value, useIsMobileWatch(state))

    return {
      state,
      ...computed,
    }
  },
})
</script>

<style lang="scss" scoped>
.person-info {
  .thumb {
    &.pc {
      position: sticky;
      top: 58px;
    }
  }
}
</style>
