<template>
  <v-container>
    <v-card
      v-for="person in computed.personList"
      :key="person.id"
      class="d-flex mb-3"
      nuxt
      :to="`/person/${person.id}`"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ person.hunkuk }} / {{ person.work }}</div>
          <v-list-item-title class="headline mb-1">{{ person.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ person.birthDay }} ~ {{ person.deathDay }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey">
          <img :src="person.imgUrl" :alt="person.name" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <pagination v-model="state.page" :max="state.limit" :total="computed.total" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from '@vue/composition-api'
import { useState, useComputed, useBeforeMount, usePageWatch } from './index.fn'
import { Pagination } from '~/components'

export default defineComponent({
  components: {
    Pagination,
  },
  setup(_, context) {
    const state = useState(context)
    const computed = useComputed(context)

    onBeforeMount(useBeforeMount(context, state))

    watch(() => state.page, usePageWatch(context, state))

    return {
      state,
      computed,
    }
  },
})
</script>
