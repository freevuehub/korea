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
    >
      <a :href="l.url.wiki" target="_blank">
        <v-card
          mx-auto
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{ l.name.kr }}</v-list-item-title>
              <v-list-item-subtitle>{{ l.date.birth }} ~ {{ l.date.death }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="grey lighten-3"
            >
              <v-img :src="l.url.img"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </a>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';
  import { MainConst } from '~/Constant';
  
  @Component({
    computed: {
      ...mapGetters({
        list: MainConst.$Get.List
      })
    }
  })
  export default class List extends Vue {}
</script>