<template>
  <v-container>
    <h2 class="mb-2">오늘 등록된 유공자</h2>
    <v-row v-if="!!computed.todayAddList.length" justify="space-between">
      <v-col v-for="person in computed.todayAddList" :key="person.id" cols="6">
        <v-card nuxt :to="`/person/${person.id}`">
          <v-img class="white--text align-end" height="200px" :src="person.imgUrl">
            <v-card-title class="title-name pa-1">{{ person.name }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pa-2">{{ person.work }} / {{ person.hunkuk }}</v-card-subtitle>
          <v-card-text class="text--primary pa-2">
            <div class="date-text text-left">{{ person.birthDay }}</div>
            <div class="date-text text-center">~</div>
            <div class="date-text text-right">{{ person.deathDay }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-else type="info">오늘 등록된 유공자가 없습니다.</v-alert>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useComputed, useMounted } from './index.fn'

export default defineComponent({
  setup(_, context) {
    const computed = useComputed(context)

    onMounted(useMounted(context))

    return {
      computed,
    }
  },
})
</script>

<style lang="scss" scoped>
.title-name {
  font-weight: bold;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}
.date-text {
  line-height: 1rem;
}
</style>
