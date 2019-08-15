<template>
  <v-snackbar
    v-model="status.view"
    color="primary"
  >
    {{ status.msg }}
    <v-btn
      dark
      text
      @click="onClick"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex';
  import { SystemConst } from '~/Constant';
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    computed: {
      ...mapGetters({
        status: SystemConst.$Get.Status
      })
    }
  })
  export default class Default extends Vue {
    onClick() {
      this.$store.dispatch(SystemConst.$Call.Status, { view: false, msg: '' });
    }
  }
</script>

<style>
 a {
   text-decoration: none;
 }
 button {
   display: block;
   width: 100%;
   outline: 0;
   border: 0;
   text-align: left;
 }
</style>