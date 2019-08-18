<template>
  <v-container
    v-if="detail.name"
    @scroll="onScroll"
  >
    <RouteHeader
      :imgUrl="detail.img.url"
      :imgSourceUrl="detail.img.sourceUrl"
      :imgSourceName="detail.img.sourceName"
    >
      {{ detail.name }}
    </RouteHeader>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary--text">
            상세 정보
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p class="ma-0">생년월일: <span class="primary--text">{{ detail.birthDay }}</span></p>
            <p class="ma-0">사망년월일: <span class="primary--text">{{ detail.lastDay }}</span></p>
            <p class="ma-0">성별: <span class="primary--text">{{ detail.gender }}</span></p>
            <p class="ma-0">운동계열: <span class="primary--text">{{ detail.workType }}</span></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary--text">
            주요 활동
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p v-for="l in achiveDetail" :key="l">
              {{ l }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="primary--text">
            출처
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p class="ma-0">
              내용:
              <v-btn
                color="primary"
                class="ma-0"
                :href="detail.achive.sourceUrl"
                text
                target="_blank"
              >
                {{ detail.achive.sourceName }}
              </v-btn>
            </p>
            <p class="ma-0">
              사진:
              <v-btn
                color="primary"
                class="ma-0"
                :href="detail.img.sourceUrl"
                text
                target="_blank"
              >
                {{ detail.img.sourceName }}
              </v-btn>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { KoreaConst } from '~/Constant';
  import { mapGetters } from 'vuex';
  import {
    RouteHeader
  } from '~/components';

  interface IGetter {
    detail: {}
  }
  
  @Component({
    transition: 'test',
    components: {
      RouteHeader
    },
    computed: {
      ...mapGetters({
        detail: KoreaConst.$Get.Idx,
      })
    },
  })
  export default class ItemDetail extends Vue {
    get achiveDetail() {
      return this.detail.achive.contents.split('\n').filter(l => !!l);
    };

    onScroll() {
      console.log('aa');
    }
  }
</script>