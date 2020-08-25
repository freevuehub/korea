<template>
  <v-container>
    <h2 class="mb-2">오늘의 인물</h2>
    <v-card class="mb-5">
      <v-img class="align-end" :src="computed.todayPerson.imgUrl">
        <v-card-title class="title-name pa-1">{{ computed.todayPerson.name }}</v-card-title>
      </v-img>
      <v-card-subtitle>
        <span>{{ computed.todayPerson.work }} / {{ computed.todayPerson.hunkuk }}</span>
      </v-card-subtitle>
      <v-list class="transparent pa-0">
        <v-list-item>
          <v-list-item-title>생년월일</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <span>{{ computed.todayPerson.birthDay }}</span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-list class="transparent pa-0">
        <v-list-item>
          <v-list-item-title>사망년월일</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <span>{{ computed.todayPerson.deathDay }}</span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-list class="transparent pa-0">
        <v-list-item>
          <v-list-item-title>포상연도</v-list-item-title>
          <v-list-item-subtitle class="text-right">
            <span>{{ computed.todayPerson.judgeYear }}</span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text :to="`/person/${computed.todayPerson.id}`">상세보기</v-btn>
      </v-card-actions>
      <!-- <v-expand-transition>
        <div v-show="state.achivementShow">
          <v-divider></v-divider>
          <v-card-text>{{ computed.todayPerson.achivement }}</v-card-text>
        </div>
      </v-expand-transition>-->
    </v-card>

    <h2 class="mb-2">오늘 등록된 유공자</h2>
    <v-row v-if="!!computed.todayAddList.length" justify="space-between">
      <v-col v-for="person in computed.todayAddList" :key="person.id" cols="6">
        <v-card nuxt :to="`/person/${person.id}`">
          <v-img class="white--text align-end" height="200px" :src="person.imgUrl">
            <v-card-title class="title-name pa-1">{{ person.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-else type="info">오늘 등록된 유공자가 없습니다.</v-alert>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useState, useComputed, useMounted } from './index.fn'

export default defineComponent({
  setup(_, context) {
    const state = useState()
    const computed = useComputed(context)

    onMounted(useMounted(context))

    return {
      state,
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
