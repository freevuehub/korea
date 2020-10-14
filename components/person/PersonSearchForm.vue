<template>
  <v-form @submit="onNameSearch" @keypress.enter="onNameSearch">
    <v-row>
      <v-col cols="6" class="pt-0 pr-2">
        <v-select
          v-model="state.hunkukFilterId"
          label="훈격"
          :items="hunkukList"
          item-text="name"
          item-value="id"
          hide-details
          solo
          :class="$round"
          elevation="10"
        />
      </v-col>
      <v-col cols="6" class="pt-0 pl-2">
        <v-select
          v-model="state.workFilterId"
          label="운동계열"
          :items="workList"
          item-text="name"
          item-value="id"
          hide-details
          solo
          :class="$round"
          elevation="10"
        />
      </v-col>
      <v-col cols="12" class="py-0 pt-1">
        <v-text-field
          v-model="state.searchText"
          :class="$round"
          elevation="10"
          append-icon="search"
          solo
          clear-icon="mdi-close-circle"
          clearable
          label="찾으시는 이름을 입력해주세요."
          type="text"
          hide-details
          @click:append="onNameSearch"
          @click:clear="state.searchText = ''"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api'
import {
  useState,
  useComputed,
  useHunkukFilterIdWatch,
  useNameSearch,
} from './person-search-form.fn'
import { Pagination } from '~/components'

export default defineComponent({
  middleware: ['person-list'],
  components: {
    Pagination,
  },
  setup(_, context) {
    const state = useState(context)
    const computed = useComputed(context)
    const onNameSearch = useNameSearch(context, state)

    watch(() => state.hunkukFilterId, useHunkukFilterIdWatch(context))

    return {
      state,
      onNameSearch,
      ...computed,
    }
  },
})
</script>
