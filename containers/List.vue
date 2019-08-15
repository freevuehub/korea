<template>
  <v-layout
    row
    wrap
    class="ma-0 pa-0 mt-3"
  >
    <v-flex
      md4
      sm6
      xs12
      v-for="l in list"
      :key="l.no"
      class="pa-2"
    >
 <!-- :href="l.url.wiki ? l.url.wiki : ''" target="_blank" -->

      <button @click.prevent="onClick(l.url.wiki)">
        <v-card
          mx-auto
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ l.name.kr }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ l.date.birth }} ~ <br>
                {{ l.date.death }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="grey lighten-3"
            >
              <v-img :src="l.url.img ? l.url.img : 'icons/icon-144x144.png'"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </button>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';
  import { MainConst, SystemConst } from '~/Constant';
  
  @Component({
    computed: {
      ...mapGetters({
        list: MainConst.$Get.List
      })
    }
  })
  export default class List extends Vue {
    onClick(url) {
      if (url) {
        window.open(url, '_blank');
      } else {
        this.$store.dispatch(SystemConst.$Call.Status, {
          view: true,
          msg: '죄송합니다. 이분에 대한 정보를 찾지 못했습니다.'
        })
      }
    }
  }
</script>