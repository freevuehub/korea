<template>
  <v-container>
    <search-form />
    <v-divider class="my-5"></v-divider>
    <list-item v-for="person in personList" :key="person.id" :item="person" class="mb-5" />
    <pagination v-model="state.page" :max="state.limit" :total="total" />
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
