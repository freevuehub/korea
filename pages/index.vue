<template>
  <v-container class="pa-0">
    <MainHeader />
    <nuxt-child />
    <List />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {
  MainHeader,
  List
} from '~/containers';
import {
  SystemConst,
  KoreaConst
} from '~/Constant';

@Component({
  components: {
    MainHeader,
    List
  }
})
export default class Main extends Vue {
  async created() {
    this.$store.dispatch(SystemConst.$Call.Loading, { head: true });

    try {
      await this.$store.dispatch(KoreaConst.$Call.List);
    } catch (e) {
      console.error(e);
    } finally {
      this.$store.dispatch(SystemConst.$Call.Loading, { head: false });
    }
  }
}
</script>