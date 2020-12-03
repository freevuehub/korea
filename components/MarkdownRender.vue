<template>
  <div class="md-render">
    <component :is="dom.component" v-for="(dom, index) in tree" :key="index">
      <template v-if="dom.tree && dom.tree.length">
        <component :is="child.component" v-for="(child, childIndex) in dom.tree" :key="childIndex">
          {{ child.value }}
        </component>
      </template>
      <template v-else>
        {{ dom.value }}
      </template>
    </component>
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

<style lang="scss" scoped>
.md-render {
  h2 {
    margin-bottom: 20px;
  }
  hr {
    opacity: 0.5;
    margin: 20px 0;
  }
  p {
    text-indent: 5px;
  }
}
</style>
