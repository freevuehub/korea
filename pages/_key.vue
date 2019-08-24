<template>
  <ItemDetail />
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { KoreaConst } from '~/Constant';
  import {
    ItemDetail
  } from '~/containers';
  
  @Component({
    transition: 'test',
    components: {
      ItemDetail
    }
  })
  export default class No extends Vue {
    async created() {
      try {
        await this.$store.dispatch(KoreaConst.$Call.Idx, {
          key: this.$route.params.key
        });
      } catch(e) {
        console.error(e);
      }
    };
  }
</script>