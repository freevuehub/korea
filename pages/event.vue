<template>
  <v-container fluid>
    <v-card :class="$round">
      <v-card-text>
        <v-sheet class="d-flex mb-5">
          <v-btn icon @click="$refs.calendar.prev()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-spacer />
          <v-card-title class="pa-0">{{ nowMonth }}</v-card-title>
          <v-spacer />
          <v-btn icon @click="$refs.calendar.next()">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="state.value"
            :weekdays="state.weekday"
            type="month"
            :events="state.events"
            event-overlap-mode="stack"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            @change="getEvents"
          ></v-calendar>
        </v-sheet>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useState, useComputed, useGetEventColor, useRnd, useGetEvents } from './event.fn'

export default defineComponent({
  middleware: ['event'],
  setup() {
    const state = useState()
    const computed = useComputed(state)
    const getEventColor = useGetEventColor()
    const rnd = useRnd()
    const getEvents = useGetEvents(state, rnd)

    return {
      state,
      ...computed,
      getEventColor,
      rnd,
      getEvents,
    }
  },
})
</script>
