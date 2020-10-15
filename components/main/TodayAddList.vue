<template>
  <v-row justify="space-between">
    <v-col v-for="person in list" :key="person.id" cols="12" xs="12" sm="12" md="6" class="py-0">
      <list-item class="mb-5" :item="person" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ImageTitle, PersonListItem } from '../'

export default defineComponent({
  components: {
    personName: ImageTitle,
    listItem: PersonListItem,
  },
  props: {
    list: Array,
  },
})
</script>
