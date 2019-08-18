<template>
  <v-app-bar
    color="primary"
    dark
    fixed
    app
  >
    <v-toolbar-title>
      FreeVue - Korea
      <v-progress-circular
        v-if="loading.head"
        :size="20"
        :width="3"
        color="white"
        indeterminate
      />
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn
      href="https://github.com/freevuehub"
      text
    >
      Github
    </v-btn>
    <v-btn
      href="https://freevuehub.github.io"
      text
    >
      Blog
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { mapGetters } from 'vuex';
  import { SystemConst } from '~/Constant';
  
  @Component({
    computed: {
      ...mapGetters({
        loading: SystemConst.$Get.Loading
      })
    }
  })
  export default class MainHeader extends Vue {
    
  }
</script>