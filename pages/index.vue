<template>
  <v-container>
    <!-- <v-card
      outlined
      v-if="!flag"
    >
      <v-img
        height="100%"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Flag_of_the_Provisional_Government_of_the_Republic_of_Korea.svg/1280px-Flag_of_the_Provisional_Government_of_the_Republic_of_Korea.svg.png"
      ></v-img>
    </v-card>
    <v-card
      outlined
      v-if="flag"
      transition="fade-transition"
    >
      <v-img
        height="100%"
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg"
      ></v-img>
    </v-card> -->
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
  </v-container>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import { Vue, Component } from 'vue-property-decorator';
import { MainConst } from '~/Constant';
import { setTimeout } from 'timers';

@Component({
  computed: {
    ...mapGetters({
      list: MainConst.$Get.List
    })
  }
})
export default class Main extends Vue {
  flag = false;
  
  async created() {
    try {
      await this.$store.dispatch(MainConst.$Call.List);
    } catch (e) {
      console.error(e);
    }
  }
  mounted() {
    setTimeout(() => {
      this.flag = true; 
    }, 1000);
  }
}
</script>
