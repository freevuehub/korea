<template>
  <v-container>
    <v-card class="mb-3" v-for="person in computed.personList" :key="person.id">
      <v-card-text>
        <v-avatar>
          <img :src="person.imgUrl" :alt="person.name" />
        </v-avatar>
        {{ person.name }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api'
import { useComputed, useBeforeMount } from './index.fn'

export default defineComponent({
  setup(_, context) {
    const computed = useComputed(context)

    onBeforeMount(useBeforeMount(context))

    return {
      computed,
    }
  },
})
</script>
