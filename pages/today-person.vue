<template>
  <v-container class="py-0">
    <v-row class="justify-center">
      <v-col xs="12" sm="10" class="py-0">
        <v-timeline>
          <v-timeline-item v-for="person in personList" :key="person.id" large>
            <template v-slot:icon>
              <v-avatar>
                <img :src="person.imgUrl || '/icon.png'" alt="" />
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>{{ person.date }}</span>
            </template>
            <v-card :class="$round" elevation="10" :href="`/person/${person.id}`" nuxt>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">{{ person.hunkuk }} / {{ person.work }}</div>
                  <v-list-item-title class="headline mb-1">{{ person.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ person.birthDay }} ~ {{ person.deathDay }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api'
import { useBeforeMount, useComputed } from './today-person.fn'

export default defineComponent({
  middleware: ['today-person'],
  setup(_, context) {
    // const state = useState()
    const computed = useComputed(context)

    onBeforeMount(useBeforeMount(context))

    return {
      // state,
      ...computed,
    }
  },
})
</script>
