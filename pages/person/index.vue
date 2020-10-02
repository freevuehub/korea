<template>
  <v-container>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-select
            label="훈격"
            :items="hunkukList"
            item-text="name"
            item-value="id"
            hide-details
            solo
            :class="$round"
            elevation="10"
            multiple
            chips
          />
        </v-col>
        <v-col cols="12">
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
import { Pagination } from '~/components'

export default defineComponent({
  middleware: ['person-list'],
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
      ...computed,
    }
  },
})
</script>
