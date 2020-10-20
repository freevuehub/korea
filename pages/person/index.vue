<template>
  <v-container>
    <v-row class="align-center flex-column">
      <v-col xs="12" sm="8">
        <search-form />
      </v-col>
      <v-col xs="12" sm="8">
        <v-divider></v-divider>
      </v-col>
      <v-col xs="12" sm="8">
        <v-row class="align-center">
          <v-col v-for="person in personList" :key="person.id" xs="12" sm="6">
            <list-item :item="person" />
          </v-col>
        </v-row>
      </v-col>
      <v-col xs="12" sm="8">
        <pagination v-model="state.page" :max="state.limit" :total="total" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from '@vue/composition-api'
import { useState, useComputed, useBeforeMount, usePageWatch } from './index.fn'
import { Pagination, PersonSearchForm, PersonListCardItem } from '~/components'

export default defineComponent({
  middleware: ['person-list'],
  components: {
    Pagination,
    searchForm: PersonSearchForm,
    listItem: PersonListCardItem,
  },
  setup(_, context) {
    const state = useState(context)
    const computed = useComputed(context)

    onBeforeMount(useBeforeMount(context))

    watch(() => state.page, usePageWatch(context))

    return {
      state,
      ...computed,
    }
  },
})
</script>
