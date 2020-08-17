<template>
  <v-container>
    <v-card class="mb-3">
      <v-card-title>(1) 순국선열</v-card-title>
      <v-card-text>
        일제의 국권 침탈 전후로부터 1945년 8월 14일까지 국내외에서 일제의 국권 침탈을 반대하거나
        또는 독립운동을 하기 위해 항거하다가 그 항거로 인해 순국한 자로, 그 공로로 건국훈장·건국포장
        또는 대통령표창을 받은 자.
      </v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(2) 애국지사</v-card-title>
      <v-card-text>
        일제의 국권 침탈 전후로부터 1945년 8월 14일까지 국내외에서 일제의 국권 침탈을 반대하거나
        독립운동을 하기 위해 항거한 사실이 있는 자로, 그 공로로 건국훈장·건국포장 또는 대통령표창을
        받은 자.
      </v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(3) 전몰군경</v-card-title>
      <v-card-text>
        군인 또는 경찰공무원으로서 전투 또는 이에 준하는 직무 수행중 사망한 자
        <br />(군무원으로서 1959년 12월 31일 이전에 전투 또는 이에 준하는 직무 수행중에 사망한 자 포함).
      </v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(4) 전상군경</v-card-title>
      <v-card-text>군인 또는 경찰공무원으로서 전투 또는 이에 준하는 직무 수행중 상이를 입고 전역 또는 퇴직한 자(군무원으로서 1959년 12월 31일 이전에 전투 또는 이에 준하는 직무 수행중 상이를 입고 퇴직한 자 포함)로, 그 상이정도가 국가보훈처장이 실시하는 신체검사에서 대통령령이 정한 상이 등급에 해당하는 신체적 장애를 입은 것으로 판정된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(5) 순직군경</v-card-title>
      <v-card-text>군인 또는 경찰공무원으로서 교육훈련 또는 직무 수행중 사망한 자(공무상의 질병으로 사망한 자 포함).</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(6) 공상군경</v-card-title>
      <v-card-text>군인 또는 경찰공무원으로서 교육훈련 또는 직무 수행중 상이(공무상의 질병 포함)를 입고 전역 또는 퇴직한 자로 그 상이정도가 국가보훈처장이 실시하는 신체검사에서 대통령령이 정한 상이 등급에 해당하는 신체적 장애를 입은 것으로 판정된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(7) 무공·보국 수훈자</v-card-title>
      <v-card-text>무공훈장 또는 보국훈장을 받은 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(8) 6·25전쟁 참전 재일학도의용군인</v-card-title>
      <v-card-text>대한민국 국민으로서 일본에 거주하던 자로 1950년 6월 25일부터 1953년 7월 27일 사이에 국군 또는 국제연합군에 지원, 입대해 6·25전쟁에 참전하고 제대한 자(파면 또는 형의 선고를 받고 제대된 자는 제외).</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(9) 4월혁명 사망자</v-card-title>
      <v-card-text>1960년 4월 19일을 전후한 혁명에 참가해 사망한 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(10) 4월혁명 상이자</v-card-title>
      <v-card-text>1960년 4월 19일을 전후한 혁명에 참가해 상이를 입은 자로서 그 상이 정도가 국가보훈처장이 실시하는 신체검사에서 대통령령이 정한 상이 등급에 해당하는 신체적 장애를 입은 것으로 판정된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(11) 순직공무원</v-card-title>
      <v-card-text>「국가공무원법」 제2조 및 「지방공무원법」 제2조에 규정된 공무원(군인 및 경찰공무원 제외)과 국가 또는 지방자치단체에서 일상적으로 공무에 종사하는 대통령령이 정한 직원으로, 공무로 인해 사망한 자(공무상의 질병으로 인해 사망한 자 포함).</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(12) 공상공무원</v-card-title>
      <v-card-text>「국가공무원법」 제2조 및 「지방공무원법」 제2조에 규정된 공무원(군인 및 경찰공무원 제외)과 국가 또는 지방자치단체에서 일상적으로 공무에 종사하는 대통령령이 정한 직원으로, 공무로 인해 상이(공무상의 질병 포함)를 입고 그 상이 정도가 국가보훈처장이 실시하는 신체검사에서 대통령령이 정한 상이 등급에 해당하는 신체적 장애를 입은 것으로 판정된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(13) 국가사회발전 특별공로순직자</v-card-title>
      <v-card-text>국가사회 발전에 현저한 공이 있는 자 중 그 공로와 관련되어 순직한 자로, 국무회의에서 이 법의 적용대상자로 의결된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(14) 국가사회발전 특별공로상이자</v-card-title>
      <v-card-text>국가사회 발전에 현저한 공이 있는 자 중 그 공로와 관련되어 상이를 입은 자로, 그 상이 정도가 국가보훈처장이 실시하는 신체검사에서 대통령령이 정한 상이 등급에 해당하는 신체적 장애를 입은 것으로 판정되어 국무회의에서 이 법의 적용대상자로 의결된 자.</v-card-text>
    </v-card>
    <v-card class="mb-3">
      <v-card-title>(15) 국가사회발전 특별공로자</v-card-title>
      <v-card-text>국가사회 발전에 현저한 공이 있는 자 중 특별공로 순직자 및 특별공로 상이자에 해당하지 않은 자로, 국무회의에서 이 법의 적용대상자로 의결된 자.</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>
