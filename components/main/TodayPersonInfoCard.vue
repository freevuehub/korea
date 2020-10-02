<template>
  <v-card class="mb-5" :class="$round" elevation="10">
    <v-card-title>오늘의 인물</v-card-title>
    <v-card-subtitle>
      <span>{{ item.work }} / {{ item.hunkuk }}</span>
    </v-card-subtitle>
    <v-list class="transparent pa-0">
      <v-list-item>
        <v-list-item-title>이름</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.name }}</span>
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>생년월일</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.birthDay }}</span>
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>사망년월일</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.deathDay }}</span>
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>포상연도</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.judgeYear }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text :to="`/person/${item.id}`">상세보기</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>
