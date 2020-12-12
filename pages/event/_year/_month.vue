<template>
  <v-container fluid>
    <v-card :class="$round">
      <v-card-text>
        <v-sheet class="d-flex mb-5">
          <v-btn icon @click="onPrevClick">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-spacer />
          <v-card-title class="pa-0">{{ nowMonth }}</v-card-title>
          <v-spacer />
          <v-btn icon @click="onNextClick">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="state.value"
            :weekdays="state.weekday"
            type="month"
            :events="eventList"
            event-overlap-mode="stack"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            start="YYYY-MM-DD"
            end="YYYY-MM-DD"
            @change="getEvents"
          ></v-calendar>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useState, useComputed, useGetEventColor, useRnd, useGetEvents } from './_month.fn'

export default defineComponent({
  middleware: ['event'],
  setup(_, context) {
    const state = useState(context)
    const computed = useComputed(context, state)
    const getEventColor = useGetEventColor()
    const rnd = useRnd()
    const getEvents = useGetEvents(state, rnd)
    const onNextClick = () => {
      const { params } = context.root.$route
      const currentMonth = Number(params.month)

      if (currentMonth === 12) {
        context.root.$router.push({
          params: {
            year: `${Number(params.year) + 1}`,
            month: '1',
          },
        })
      } else {
        context.root.$router.push({
          params: {
            ...params,
            month: `${currentMonth + 1}`,
          },
        })
      }
    }
    const onPrevClick = () => {
      const { params } = context.root.$route
      const currentMonth = Number(params.month)

      if (currentMonth === 1) {
        context.root.$router.push({
          params: {
            year: `${Number(params.year) - 1}`,
            month: '12',
          },
        })
      } else {
        context.root.$router.push({
          params: {
            ...params,
            month: `${currentMonth - 1}`,
          },
        })
      }
    }

    return {
      state,
      ...computed,
      getEventColor,
      rnd,
      getEvents,
      onNextClick,
      onPrevClick,
    }
  },
})
</script>
