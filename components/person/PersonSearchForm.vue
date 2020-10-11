<template>
  <v-form>
    <v-row>
      <v-col cols="12" class="pt-0">
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
      <v-col cols="12" class="py-0">
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
          @click:append="state.searchText = ''"
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
  // useSearchTextWatch,
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

    // watch(() => state.searchText, useSearchTextWatch(context))
    watch(() => state.hunkukFilterId, useHunkukFilterIdWatch(context))

    return {
      state,
      ...computed,
    }
  },
})
</script>
