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
    <List />  
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { List } from '~/containers';
import { MainConst } from '~/Constant';

@Component({
  components: {
    List
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
