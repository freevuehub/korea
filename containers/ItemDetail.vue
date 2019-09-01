<template>
  <v-container
    v-if="detail.name"
  >
    <RouteHeader
      :imgUrl="detail.img.url"
    >
      {{ detail.name }}
    </RouteHeader>
    <ImageHeader
      v-show="false"
      :img="detail.img.url"
    >
      {{ detail.name }}
    </ImageHeader>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-img :src="detail.img.url ? detail.img.url : '/icons/icon-144x144.png'"></v-img>
        </v-card>
        <v-card>
          <v-card-title class="primary--text">
            상세 정보
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>생년월일:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">{{ detail.birthDay }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>사망년월일:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">{{ detail.lastDay }}</v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>운동계열:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">{{ detail.workType }}</v-list-item-content>
            </v-list-item>
          </v-list>
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
            데이터 내용
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>활동 내용 출처:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">
                <v-btn
                  color="primary"
                  class="ma-0"
                  :href="detail.achive.sourceUrl"
                  text
                  small
                  target="_blank"
                >
                  {{ detail.achive.sourceName }}
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>사진 출처:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">
                <v-btn
                  color="primary"
                  class="ma-0"
                  :href="detail.img.sourceUrl"
                  text
                  small
                  target="_blank"
                >
                  {{ detail.img.sourceName }}
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>최초 등록일:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">
                {{ detail.createdDate }}
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>최종 수정일:</v-list-item-content>
              <v-list-item-content class="align-end primary--text">
                {{ detail.updatedDate }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
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
    ImageHeader,
    RouteHeader
  } from '~/components';

  interface IGetter {
    detail: {}
  }

  @Component({
    transition: 'test',
    components: {
      ImageHeader,
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
