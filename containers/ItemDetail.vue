<template>
  <v-container
    v-if="detail.name"
  >
    <RouteHeader
      :notMobile="notMobile"
      :imgUrl="detail.img.url"
    >
      {{ detail.name }}
    </RouteHeader>

    <v-row>
      <v-col cols="12" md="4">
        <v-card v-if="notMobile">
          <v-img :src="detail.img.url ? detail.img.url : '/icons/icon-144x144.png'"></v-img>
        </v-card>
        <v-card>
          <v-card-title class="primary--text">
            상세 정보
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col class="pt-0 text-right" cols="5" sm="4">생년월일:</v-col>
              <v-col class="pt-0 primary--text" cols="7" sm="8">{{ detail.birthDay }}</v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0 text-right" cols="5" sm="4">사망년월일:</v-col>
              <v-col class="pt-0 primary--text" cols="7" sm="8">{{ detail.lastDay }}</v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0 text-right" cols="5" sm="4">성별:</v-col>
              <v-col class="pt-0 primary--text" cols="7" sm="8">{{ detail.gender }}</v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0 text-right" cols="5" sm="4">운동계열:</v-col>
              <v-col class="pt-0 primary--text" cols="7" sm="8">{{ detail.workType }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="8">
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
    get notMobile() {
      const { $vuetify }: any = this;

      return $vuetify.breakpoint.width > 960;
    };

    get achiveDetail() {
      const { detail }: any = this;

      return detail.achive.contents.split('\n').filter(l => !!l);
    };
  }
</script>