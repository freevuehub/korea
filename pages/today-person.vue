<template>
  <v-container class="py-0">
    <v-row class="justify-center">
      <v-col xs="12" sm="10" class="py-0">
        <v-timeline align-top>
          <v-timeline-item v-for="n in 4" :key="n" large>
            <template v-slot:icon>
              <v-avatar>
                <img src="/noneImg.png" alt="" />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>Tus eu perfecto</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">
                Lorem ipsum
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec
                ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril
                disputando voluptatibus, vix an salutandi sententiae.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useState, useComputed } from './index.fn'
import { TodayAddList, TodayPersonImgCard, TodayPersonInfoCard } from '~/components'

export default defineComponent({
  middleware: ['main'],
  components: {
    personImage: TodayPersonImgCard,
    personInfo: TodayPersonInfoCard,
    addList: TodayAddList,
  },
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    return {
      state,
      ...computed,
    }
  },
})
</script>
