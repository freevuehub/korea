<template>
  <v-row justify="space-between">
    <!-- <v-col v-for="person in list" :key="person.id" cols="12" xs="12" sm="12" md="6" class="py-0">
      <person class="mb-5" :item="person" />
    </v-col> -->
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { PersonListCardItem } from '../person'

export default defineComponent({
  name: 'TodayAddPersonList',
  components: {
    person: PersonListCardItem,
  },
  props: {
    list: Array,
  },
})
</script>
