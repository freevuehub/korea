<template>
  <v-card class="mb-5" :class="$round" elevation="10">
    <v-img class="align-end" :src="item.imgUrl || '/icon.png'" min-height="200px">
      <person-name>{{ item.name }}</person-name>
    </v-img>
    <v-card-subtitle>
      <span>{{ item.work }} / {{ item.hunkuk }}</span>
    </v-card-subtitle>
    <v-list class="transparent pa-0">
      <v-list-item>
        <v-list-item-title>생년월일</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.birthDay }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <v-list class="transparent pa-0">
      <v-list-item>
        <v-list-item-title>사망년월일</v-list-item-title>
        <v-list-item-subtitle class="text-right">
          <span>{{ item.deathDay }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
    <v-list class="transparent pa-0">
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
import { ImageTitle } from './'

export default defineComponent({
  components: {
    personName: ImageTitle,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
})
</script>
