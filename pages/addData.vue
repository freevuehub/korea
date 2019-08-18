<template>
  <v-container>
    <v-card>
      <v-card-title>
        기본정보
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <v-select
              :items="hunkukType"
              item-text="name"
              item-value="code"
              menu-props="auto"
              v-model="key"
              label="훈격"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              :items="works"
              v-model="form.workType"
              label="주요활동"
              menu-props="auto"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="이름"
              v-model="form.name"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              :items="genders"
              v-model="form.gender"
              label="성별"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="생년월일"
              v-model="form.birthDay"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="사망년월일"
              v-model="form.lastDay"
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mt-3">
      <v-card-title>
        이미지 정보
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="이미지 경로"
              v-model="form.imgUrl"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="이미지 출처 경로"
              v-model="form.imgSourceUrl"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="이미지 출처 이름"
              v-model="form.imgSourceName"
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="my-3">
      <v-card-title>
        상세 정보
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-textarea
              label="활동 내용"
              v-model="form.achiveContent"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="활동 출처 경로"
              v-model="form.achiveSourceUrl"
              outlined
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="활동 출처 이름"
              v-model="form.achiveSourceName"
              outlined
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-btn color="primary" @click.prevent="onClick">등록</v-btn>
  </v-container>
</template>

<script lang="ts">
  import { KoreaConst } from '~/Constant';
  import { Vue, Component } from 'vue-property-decorator';
  
  @Component
  export default class Admin extends Vue {
    genders = ['남', '여'];
    works = [
      '의병',
      '3.1운동',
      '문화운동',
      '국내항일',
      '의열투쟁',
      '학생운동',
      '광복군',
      '계몽운동',
      '임시정부',
      '일본방면',
      '만주방면',
      '중국방면',
      '노령방면',
      '미주방면',
      '인도네시아방면',
      '독립운동지원',
      '구주방면',
    ];
    hunkukType = [
      { name: '대한민국장',	code: 'PSG00002' },
      { name: '대통령장',	code: 'PSG00003' },
      { name: '독립장',	code: 'PSG00004' },
      { name: '애국장',	code: 'PSG00005' },
      { name: '애족장',	code: 'PSG00006' },
      { name: '건국포장',	code: 'PSG00007' },
      { name: '대통령표창',	code: 'PSG00008' },
      { name: '서훈취소',	code: 'PSG00010' },
    ];
    key = 'PSG00002';
    form = {
      name: '',
      birthDay: '',
      lastDay: '',
      gender: '남',
      workType: '임시정부',
      imgUrl: '',
      imgSourceUrl: 'http://e-gonghun.mpva.go.kr',
      imgSourceName: '공훈전자사료관',
      achiveContent: '',
      achiveSourceUrl: 'http://e-gonghun.mpva.go.kr',
      achiveSourceName: '공훈전자사료관',
    };

    async onClick() {
      const formData = new FormData();

      Object.entries(this.form).forEach(l => {
        formData.append(l[0], l[1]);
      });

      try {
        await this.$store.dispatch(KoreaConst.$Call.AddData, { key: this.key, form: this.form });
      } catch(e) {
        console.error(e);
      }
    }
  }
</script>