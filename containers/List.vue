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
      v-for="(l, idx) in list"
      :key="l.key"
      class="pa-2"
    >
      <button @click.prevent="onClick(l, idx)">
        <v-card
          mx-auto
          outlined
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1 primary--text">
                {{ l.name }} <span class="body-1 grey--text">({{ l.workType }})</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ l.birthDay }} ~ {{ l.lastDay }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
              tile
              size="80"
              color="grey lighten-3"
            >
              <v-img
                :src="l.img.url ? l.img.url : 'icons/icon-144x144.png'"
                lazy-src="icons/icon-144x144.png"
                contain
              ></v-img>
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
  import {
    KoreaConst,
    SystemConst
  } from '~/Constant';
  
  @Component({
    computed: {
      ...mapGetters({
        list: KoreaConst.$Get.List
      })
    }
  })
  export default class List extends Vue {
    async onClick(data, idx) {
      await this.$store.dispatch(SystemConst.$Call.Loading, { head: true });

      try {
        await this.$store.dispatch(KoreaConst.$Call.Idx, {
          ...data,
          idx
        });

        this.$router.push(`/${data.key}`);
      } catch(e) {
        console.error(e);
      } finally {
        await this.$store.dispatch(SystemConst.$Call.Loading, { head: false });
      }
    }
  }
</script>