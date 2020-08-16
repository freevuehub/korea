<template>
  <v-container>{{ computed.detail.name }}</v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api'
import { useComputed, useBeforeMount } from './_id.fn'

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
