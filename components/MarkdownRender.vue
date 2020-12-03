<template>
  <div>
    <template v-for="(dom, index) in tree">
      <component :is="dom.component" :key="index">{{ dom.value }}</component>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useComputed } from './markdown-render.fn'

export default defineComponent({
  props: {
    markdown: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const computed = useComputed(props)

    return {
      ...computed,
    }
  },
})
</script>
