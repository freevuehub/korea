<template>
  <v-row justify="space-between">
    <v-col v-for="person in list" :key="person.id" cols="6">
      <v-card nuxt :to="`/person/${person.id}`">
        <v-img class="white--text align-end" height="200px" :src="person.imgUrl">
          <person-name>{{ person.name }}</person-name>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ImageTitle } from './'

export default defineComponent({
  components: {
    personName: ImageTitle,
  },
  props: {
    list: Array,
  },
})
</script>
