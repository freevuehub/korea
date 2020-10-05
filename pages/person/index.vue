<template>
  <v-container>
    <search-form />
    <v-divider class="my-5"></v-divider>
    <v-card
      v-for="person in personList"
      :key="person.id"
      class="d-flex mb-5"
      :class="$round"
      elevation="10"
      nuxt
      :to="`/person/${person.id}`"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ person.hunkuk }} / {{ person.work }}</div>
          <v-list-item-title class="headline mb-1">{{ person.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ person.birthDay }} ~ {{ person.deathDay }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey" :class="$round">
          <img :src="person.imgUrl || './noneImg.png'" :alt="person.name" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <pagination v-model="state.page" :max="state.limit" :total="total" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from '@vue/composition-api'
import { useState, useComputed, useBeforeMount, usePageWatch } from './index.fn'
import { Pagination, PersonSearchForm } from '~/components'

export default defineComponent({
  middleware: ['person-list'],
  components: {
    Pagination,
    searchForm: PersonSearchForm,
  },
  setup(_, context) {
    const state = useState(context)
    const computed = useComputed(context)

    onBeforeMount(useBeforeMount(context, state))

    watch(() => state.page, usePageWatch(context, state))

    return {
      state,
      ...computed,
    }
  },
})
</script>
